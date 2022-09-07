import pygame

pygame.init()

displayw = 1600
displayh = 900

gameDisplay = pygame.display.set_mode((displayw, displayh))
pygame.display.set_caption('Power Head')

black = (0, 0, 0)
white = (255, 255, 255)

clock = pygame.time.Clock()
crashed = False

pi = 3.14159265359


def eqwerr(n1, n2, nerror):  # equal with error
    return n2 - nerror < n1 < n2 + nerror


def check_collision_side(vertex, pltvt):  # platform vertices
    return pltvt[0] < vertex[0] < pltvt[0] + pltvt[2] and pltvt[1] < vertex[1] < pltvt[1] + pltvt[3]


def side_collide(objarr, sid):
    plyrarr = [player.x, player.y, player.w, player.h]
    temp = 0
    if sid == 0:
        temp = int(check_collision_side([player.x, player.y + player.h], objarr))
        temp += int(check_collision_side([player.x + player.w, player.y + player.h], objarr))
        temp += int(check_collision_side([objarr[0], objarr[1]], plyrarr))
        temp += int(check_collision_side([objarr[0] + objarr[2], objarr[1]], plyrarr))
    elif sid == 1:
        temp = int(check_collision_side([player.x, player.y], objarr))
        temp += int(check_collision_side([player.x, player.y + player.h], objarr))
        temp += int(check_collision_side([objarr[0] + objarr[2], objarr[1]], plyrarr))
        temp += int(check_collision_side([objarr[0] + objarr[2], objarr[1] + objarr[3]], plyrarr))
    elif sid == 2:
        temp = int(check_collision_side([player.x, player.y], objarr))
        temp += int(check_collision_side([player.x + player.w, player.y], objarr))
        temp += int(check_collision_side([objarr[0], objarr[1] + objarr[3]], plyrarr))
        temp += int(check_collision_side([objarr[0] + objarr[2], objarr[1] + objarr[3]], plyrarr))
    elif sid == 3:
        temp = int(check_collision_side([player.x + player.w, player.y], objarr))
        temp += int(check_collision_side([player.x + player.w, player.y + player.h], objarr))
        temp += int(check_collision_side([objarr[0], objarr[1]], plyrarr))
        temp += int(check_collision_side([objarr[0], objarr[1] + objarr[3]], plyrarr))
    return temp > 1


def sin(n):  # n in degrees
    if not -180 < n <= 180:
        n = ((n + 180) % 360) - 180
    if n > 90:
        n = 180 - n
    elif n < -90:
        n = - 180 - n
    n *= pi / 180
    return n * (1 - n ** 2 / 6 + n ** 4 / 120 - n ** 6 / 5040)


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
    hearts = 3

    class jump:
        h = 250
        time = 40
        cooldown = 30
        cooldownTimer = 0


class images:
    player = pygame.image.load('power_head.png')
    bullet = pygame.image.load('bullet.png')


ground_level = 800  # the top of the ground

is_jumping = False

keyA = False
keyD = False
keySpace = False

platforms = [[600, 600, 150, 30]]  # x, y, width, height
bullets = [[300, 0, 19, 66, 0, 4], [400, 0, 19, 66, 45, 4]]  # x, y, width, height, rot, speed

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

    for i in bullets:
        i[0] += i[5] * sin(i[4])
        i[1] += i[5] * sin(90 - i[4])

    # collisions
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
        if side_collide(i, 2):
            player.y = i[1] + i[3]
            player.dy *= -1
        elif side_collide(i, 0):
            is_jumping = False
            player.y = i[1] - player.h
            player.dy = 0
            player.d2y = 0
        elif side_collide(i, 1):
            player.x = i[0] + i[2]
        elif side_collide(i, 3):
            player.x = i[0] - player.w

    for i in bullets:
        if side_collide(i, 1) or side_collide(i, 2) or side_collide(i, 3):
            bullets.remove(i)
            player.hearts -= 1
        elif side_collide(i, 0):
            bullets.remove(i)
            player.dy *= -1

    gameDisplay.fill(white)
    # gameDisplay.blit(pygame.font.SysFont('Comic Sans MS', 30).render(a, True, (0, 0, 0)), (0, 0))
    for i in bullets:
        gameDisplay.blit(pygame.transform.rotate(images.bullet, i[4]), (i[0], i[1]))
    for i in platforms:
        pygame.draw.rect(gameDisplay, (197, 226, 232), pygame.Rect(i[0], i[1], i[2], i[3]))
    gameDisplay.blit(images.player, (player.x, player.y))
    pygame.draw.rect(gameDisplay, (77, 58, 45), pygame.Rect(0, ground_level, displayw, displayh - ground_level))

    pygame.display.update()
    clock.tick(60)

pygame.quit()
quit()
