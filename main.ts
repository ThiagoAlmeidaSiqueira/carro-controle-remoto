makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    direcao += -30
    magicbit.GeekServo(magicbit.Servos.S1, direcao)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    magicbit.MotorRun(magicbit.Motors.M1, -255)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    magicbit.MotorRun(magicbit.Motors.M1, 255)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    direcao += 30
    magicbit.GeekServo(magicbit.Servos.S1, direcao)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    magicbit.MotorStop(magicbit.Motors.M1)
})
let direcao = 0
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
direcao = 90
magicbit.GeekServo(magicbit.Servos.S1, 90)
