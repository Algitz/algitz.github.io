import pygame

pygame.init()

displayw = 1600
displayh = 900

gameDisplay = pygame.display.set_mode((displayw, displayh))
pygame.display.set_caption('Power Head')

black = (0,0,0)
white = (255,255,255)

clock = pygame.time.Clock()
crashed = False
carImg = pygame.image.load('power_head.png')

def eqwerr(n1, n2, nerror): # equal with error
    return (n2 - nerror < n1 and n1 < n2 + nerror)

def check_collision_side(vertex, pltvt): # platform vertices
    if vertex[0] > pltvt[0] and vertex[0] < pltvt[0] + pltvt[2] and vertex[1] > pltvt[1] and vertex[1] < pltvt[1] + pltvt[3]:
        small_dist = min([vertex[0] - pltvt[0], pltvt[0] + pltvt[2] - vertex[0], vertex[1] - pltvt[1], pltvt[1] + pltvt[3] - vertex[1]])
        if small_dist == vertex[1] - pltvt[1]:
            return 0
        elif small_dist == pltvt[0] + pltvt[2] - vertex[0]:
            return 1
        elif small_dist == pltvt[1] + pltvt[3] - vertex[1]:
            return 2
        elif small_dist == vertex[0] - pltvt[0]:
            return 3
    else:
        return -1

class player:
    x = 0
    y = 0
    dx = 0
    dy = 0
    d2x = 0
    d2y = 0
    speed = 6.5
    w = 164
    h = 130
    class jump:
        h = 220
        time = 40
        cooldown = 30
        cooldownTimer = 0

ground_level = 800 # the top of the ground

is_jumping = False

keyA = False
keyD = False
keySpace = False

#platforms = [[700, 800, 200, 30], [600, 500, 150, 30], [1000, 300, 50, ground_level - 300]]
platforms = []

# setup
player.x = displayw / 2 - player.w / 2
player.y = ground_level - player.h

while not crashed:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            crashed = True

        ############################
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_a:
                keyA = True
            elif event.key == pygame.K_d:
                keyD = True
            elif event.key == pygame.K_SPACE:
                keySpace = True
                
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_a:
                keyA = False
            elif event.key == pygame.K_d:
                keyD = False
            elif event.key == pygame.K_SPACE:
                keySpace = False
        ######################
    if keyA == keyD:
        player.dx = 0
    elif keyA:
        player.dx = -player.speed
    elif keyD:
        player.dx = player.speed
    if keySpace and not is_jumping and player.jump.cooldownTimer == 0:
        is_jumping = True
        player.jump.cooldownTimer = 1
        player.d2y = 8 * player.jump.h / player.jump.time ** 2
        player.dy = - 4 * player.jump.h / player.jump.time

    if player.jump.cooldownTimer > 0:
        player.jump.cooldownTimer += 1
    if not is_jumping and player.jump.cooldownTimer > player.jump.cooldown:
        player.jump.cooldownTimer = 0
        
    for i in platforms:
        if (player.x < i[0] - player.w or player.x > i[0] + i[2]) and player.y == i[1] - player.h and not is_jumping:
            is_jumping = True
            player.d2y = 8 * player.jump.h / player.jump.time ** 2
    
    player.dx += player.d2x
    player.x += player.dx
    player.dy += player.d2y
    player.y += player.dy

    # collision
    if player.x < 0:
        player.x = 0
    if player.x > displayw - player.w:
        player.x = displayw - player.w
    if player.y > ground_level - player.h and is_jumping:
        player.y = ground_level - player.h
        is_jumping = False
        player.d2y = 0
        player.dy = 0
    for i in platforms:
        if check_collision_side([player.x, player.y + player.h], i) == 0 or check_collision_side([player.x + player.w, player.y + player.h], i) == 0:
            is_jumping = False
            player.y = i[1] - player.h
            player.dy = 0
            player.d2y = 0
        elif check_collision_side([player.x, player.y], i) == 1 or check_collision_side([player.x, player.y + player.h], i) == 1:
            player.x = i[0] + i[2]
        elif check_collision_side([player.x, player.y], i) == 2 or check_collision_side([player.x + player.w, player.y], i) == 2:
            player.y = i[1] + i[3]
            player.dy *= -1
        elif check_collision_side([player.x + player.w, player.y], i) == 3 or check_collision_side([player.x + player.w, player.y + player.h], i) == 3:
            player.x = i[0] - player.w

   ##         
    gameDisplay.fill(white)
    #gameDisplay.blit(pygame.font.SysFont('Comic Sans MS', 30).render(a, True, (0, 0, 0)), (0, 0))
    pygame.draw.rect(gameDisplay, (77, 58, 45), pygame.Rect(0, ground_level, displayw, displayh - ground_level))
    for i in platforms:
        pygame.draw.rect(gameDisplay, (197, 226, 232), pygame.Rect(i[0], i[1], i[2], i[3]))
    gameDisplay.blit(carImg, (player.x, player.y))
        
    pygame.display.update()
    clock.tick(60)

pygame.quit()
quit()
