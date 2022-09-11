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
sqrt3 = 3 ** (1/2)


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
    isJumping = False
    isDoubleJumping = False

    class jump:
        h = 250
        time = 40
        cooldown = 30
        cooldownTimer = 0


class images:
    player = pygame.image.load('power_head.png')
    bullet = pygame.image.load('bullet.png')
    powerup = pygame.image.load('power_up.png')
    heart = pygame.image.load('heart.png')
    background = pygame.image.load('bg.png')
    # favicon = pygame.image.load('icon.png')


class powerup:
    duration = 0
    durationTimer = 0
    type = ''
    slownessDuration = 300
    slownessMultiplier = 0.5
    slowEnemiesDuration = 300
    slowEnemiesMultiplier = 0.3
    doubleJumpDuration = 600
    blindnessDuration = 600
    blindnessRadius = 220
    blindnessColor = (10, 10, 10)


ground_level = 800  # the top of the ground

keyA = False
keyD = False
keySpace = False

platforms = [[500, 250, 450, 30]]  # x, y, width, height
bullets = [[300, 0, 19, 66, 0, 4], [400, 500, 19, 66, 180, 4]]  # x, y, width, height, rot, speed
powerups = [[800, 400, 50, 50,
             'bulletRedirect']]  # x, y, width, height, type (regen, doubleJump, slowEnemies, slowness, blindness,
# bulletRedirect)


def eqwerr(n1, n2, nerror):  # equal with error
    return n2 - nerror < n1 < n2 + nerror


def check_collision_side(vertex, pltvt):  # platform vertices
    return pltvt[0] < vertex[0] < pltvt[0] + pltvt[2] and pltvt[1] < vertex[1] < pltvt[1] + pltvt[3]


def side_collide(objarr, sid, plyrarr=None):
    if plyrarr is None:
        plyrarr = [player.x, player.y, player.w, player.h]
    temp0 = 0
    if sid == 0:
        temp0 = int(check_collision_side([player.x, player.y + player.h], objarr))
        temp0 += int(check_collision_side([player.x + player.w, player.y + player.h], objarr))
        temp0 += int(check_collision_side([objarr[0], objarr[1]], plyrarr))
        temp0 += int(check_collision_side([objarr[0] + objarr[2], objarr[1]], plyrarr))
    elif sid == 1:
        temp0 = int(check_collision_side([player.x, player.y], objarr))
        temp0 += int(check_collision_side([player.x, player.y + player.h], objarr))
        temp0 += int(check_collision_side([objarr[0] + objarr[2], objarr[1]], plyrarr))
        temp0 += int(check_collision_side([objarr[0] + objarr[2], objarr[1] + objarr[3]], plyrarr))
    elif sid == 2:
        temp0 = int(check_collision_side([player.x, player.y], objarr))
        temp0 += int(check_collision_side([player.x + player.w, player.y], objarr))
        temp0 += int(check_collision_side([objarr[0], objarr[1] + objarr[3]], plyrarr))
        temp0 += int(check_collision_side([objarr[0] + objarr[2], objarr[1] + objarr[3]], plyrarr))
    elif sid == 3:
        temp0 = int(check_collision_side([player.x + player.w, player.y], objarr))
        temp0 += int(check_collision_side([player.x + player.w, player.y + player.h], objarr))
        temp0 += int(check_collision_side([objarr[0], objarr[1]], plyrarr))
        temp0 += int(check_collision_side([objarr[0], objarr[1] + objarr[3]], plyrarr))
    return temp0 > 1


def sin(n):  # n in degrees
    if not -180 < n <= 180:
        n = ((n + 180) % 360) - 180
    if n > 90:
        n = 180 - n
    elif n < -90:
        n = - 180 - n
    n *= pi / 180
    return n * (1 - n ** 2 / 6 + n ** 4 / 120 - n ** 6 / 5040)


def gafrar(rise, run): # get angle from rise and run
    n = run / rise
    nRec = rise / run
    if -1 <= n <= 1:
        return n * (5.56047951745 * (n ** 4) - 17.8562590305 * (n ** 2) + n * 180 / pi)
    elif n > 1:
        return 90 - nRec * (5.56047951745 * (nRec ** 4) - 17.8562590305 * (nRec ** 2) + nRec * 180 / pi)
    else:
        return - 90 - nRec * (5.56047951745 * (nRec ** 4) - 17.8562590305 * (nRec ** 2) + nRec * 180 / pi)


# setup
player.x = displayw / 2 - player.w / 2
player.y = ground_level - player.h
# pygame.display.set_icon()

while not crashed:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            crashed = True

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

    if powerup.duration > 0 and powerup.durationTimer < powerup.duration:
        powerup.durationTimer += 1
    elif powerup.durationTimer >= powerup.duration:
        powerup.duration = 0
        powerup.durationTimer = 0
        powerup.type = ''

    if keyA == keyD:
        if player.isJumping:
            player.dx *= 0.98
        elif not -0.1 < player.dx < 0.1:
            player.dx *= 0.69
        else:
            player.dx = 0
    elif keyA:
        if powerup.durationTimer > 0 and powerup.type == 'slowness':
            player.dx = -player.speed * powerup.slownessMultiplier
        else:
            player.dx = -player.speed
    elif keyD:
        if powerup.durationTimer > 0 and powerup.type == 'slowness':
            player.dx = player.speed * powerup.slownessMultiplier
        else:
            player.dx = player.speed

    if keySpace and not player.isJumping and player.jump.cooldownTimer == 0:
        player.isJumping = True
        player.jump.cooldownTimer = 1
        player.d2y = 8 * player.jump.h / player.jump.time ** 2
        player.dy = - 4 * player.jump.h / player.jump.time
    elif keySpace and player.isJumping and player.dy > 0 and not player.isDoubleJumping and powerup.durationTimer > 0 and powerup.type == 'doubleJump':
        player.isDoubleJumping = True
        player.d2y = 8 * player.jump.h / player.jump.time ** 2
        player.dy = - 4 * player.jump.h / player.jump.time

    if player.jump.cooldownTimer > 0:
        player.jump.cooldownTimer += 1
    if not player.isJumping and player.jump.cooldownTimer > player.jump.cooldown:
        player.jump.cooldownTimer = 0

    for i in platforms:
        if (player.x < i[0] - player.w or player.x > i[0] + i[2]) and player.y == i[1] - player.h and not player.isJumping:
            player.isJumping = True
            player.d2y = 8 * player.jump.h / player.jump.time ** 2

    player.dx += player.d2x
    player.x += player.dx
    player.dy += player.d2y
    player.y += player.dy

    for i in bullets:
        # i[4] += 1
        if powerup.durationTimer > 0 and powerup.type == 'slowEnemies':
            i[0] += i[5] * sin(i[4]) * powerup.slowEnemiesMultiplier
            i[1] += i[5] * sin(90 - i[4]) * powerup.slowEnemiesMultiplier
        else:
            i[0] += i[5] * sin(i[4])
            i[1] += i[5] * sin(90 - i[4])

    # collisions
    if player.x < 0:
        player.x = 0
    if player.x > displayw - player.w:
        player.x = displayw - player.w
    if player.y > ground_level - player.h and player.isJumping:
        player.y = ground_level - player.h
        player.isJumping = False
        player.isDoubleJumping = False
        player.d2y = 0
        player.dy = 0

    for i in platforms:
        if side_collide(i, 2):
            player.y = i[1] + i[3]
            player.dy *= -1
        elif side_collide(i, 0) and player.dy > 0:
            player.isJumping = False
            player.isDoubleJumping = False
            player.y = i[1] - player.h
            player.dy = 0
            player.d2y = 0
        elif side_collide(i, 1):
            player.x = i[0] + i[2]
        elif side_collide(i, 3):
            player.x = i[0] - player.w

        for j in bullets:
            temp3 = [[j[0], j[1]], [j[0] + j[2] * sin(90 - j[4]), j[1] - j[2] * sin(j[4])], [j[0] + j[3] * sin(j[4]), j[1] + j[3] * sin(90 - j[4])], [j[0] + j[3] * sin(j[4]) + j[2] * sin(90 - j[4]), j[1] + j[3] * sin(90 - j[4]) - j[2] * sin(j[4])]]
            temp4 = False
            for k in temp3:
                if i[0] < k[0] < i[0] + i[2] and i[1] < k[1] < i[1] + i[3]:
                    temp4 = True
            if temp4:
                bullets.remove(j)

    for i in bullets:
        if -90 < i[4] < 90 and (
                i[1] + i[3] * sin(90 - i[4]) > ground_level or i[1] + i[3] * sin(90 - i[4]) - i[2] * sin(
                i[4]) > ground_level):
            bullets.remove(i)
        elif (i[4] == 90 and i[0] > displayw) or (i[4] == -90 and i[0] < -i[3]):
            bullets.remove(i)
        elif not -90 < i[4] < 90 and (
                i[1] - i[3] * sin(90 - i[4]) < 0 or i[1] - i[3] * sin(90 - i[4]) - i[2] * sin(i[4]) < 0):
            bullets.remove(i)
        elif side_collide(i, 1) or side_collide(i, 2) or side_collide(i, 3):
            bullets.remove(i)
            player.hearts -= 1
        elif side_collide(i, 0):
            bullets.remove(i)
            player.dy *= -1

    for i in powerups:
        if side_collide(i, 0) or side_collide(i, 1) or side_collide(i, 2) or side_collide(i, 3):
            if i[4] == 'regen':
                player.hearts += 1
            elif i[4] == 'doubleJump':
                powerup.duration = powerup.doubleJumpDuration
                powerup.type = 'doubleJump'
            elif i[4] == 'slowEnemies':
                powerup.duration = powerup.slowEnemiesDuration
                powerup.type = 'slowEnemies'
            elif i[4] == 'slowness':
                powerup.duration = powerup.slownessDuration
                powerup.type = 'slowness'
            elif i[4] == 'blindness':
                powerup.duration = powerup.blindnessDuration
                powerup.type = 'blindness'
            elif i[4] == 'bulletRedirect':
                for j in bullets:
                    temp5 = [j[0], j[1], (j[0] * 2 + j[3] * sin(j[4]) + j[2] * sin(90 - j[4])) / 2, (j[1] * 2 + j[3] * sin(90 - j[4]) - j[2] * sin(j[4])) / 2]  # bullet x, y, midpoint x, midpoint y
                    temp5.append(gafrar(player.y - temp5[1], player.x - temp5[0])) # new angle
                    if (player.y < temp5[1] and not -90 < temp5[4] < 90) or (player.x < temp5[1] and -180 < temp5[4] < 180):
                        if temp5[4] < 0:
                            temp5[4] += 180
                        else:
                            temp5[4] -= 180

                    j[0] = (temp5[2] - temp5[0]) * sin(90 - temp5[4]) - (temp5[3] - temp5[1]) * sin(temp5[4]) + temp5[0]
                    j[1] = (temp5[2] - temp5[0]) * sin(temp5[4]) + (temp5[3] - temp5[1]) * sin(temp5[4]) + temp5[1]
                    j[4] = temp5[4]

            powerups.remove(i)

    gameDisplay.fill(white)
    gameDisplay.blit(pygame.transform.scale(images.background, (displayw, displayh)), (0, 0))
    # gameDisplay.blit(pygame.font.SysFont('Comic Sans MS', 30).render(str(powerup.durationTimer), True, (0, 0, 0)), (0, 50))
    for i in bullets:
        newrect = pygame.transform.rotate(images.bullet, i[4]).get_rect(center=((i[0] * 2 + i[3] * sin(i[4]) + i[2] * sin(90 - i[4])) / 2, (i[1] * 2 + i[3] * sin(90 - i[4]) - i[2] * sin(i[4])) / 2))
        gameDisplay.blit(pygame.transform.rotate(images.bullet, i[4]), newrect)
    for i in platforms:
        pygame.draw.rect(gameDisplay, (63, 150, 62), pygame.Rect(i[0], i[1], i[2], i[3]))
    for i in powerups:
        gameDisplay.blit(images.powerup, (i[0], i[1]))
    gameDisplay.blit(images.player, (player.x, player.y))
    pygame.draw.rect(gameDisplay, (77, 58, 45), pygame.Rect(0, ground_level, displayw, displayh - ground_level))
    if powerup.durationTimer > 0 and powerup.type == 'blindness':
        temp1 = [(player.x + player.w / 2, 0), (displayw, 0), (displayw, displayh), (0, displayh), (0, 0),
                 (player.x + player.w / 2, 0)]
        temp2 = 18
        for i in range(temp2):
            temp1.append((player.x + player.w / 2 - powerup.blindnessRadius * sin(i * 360 / temp2),
                          player.y + player.h / 2 - powerup.blindnessRadius * sin(90 - i * 360 / temp2)))
        temp1.append(temp1[6])
        pygame.draw.polygon(gameDisplay, powerup.blindnessColor, temp1)
        pygame.draw.circle(gameDisplay, powerup.blindnessColor, (player.x + player.w / 2, player.y + player.h / 2),
                           powerup.blindnessRadius + 5, 10)

    # ui
    for i in range(player.hearts):
        gameDisplay.blit(images.heart, (50 * i, 0))

    pygame.display.update()
    clock.tick(60)

pygame.quit()
quit()
