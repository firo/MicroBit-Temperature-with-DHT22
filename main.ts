basic.showIcon(IconNames.Happy)
control.waitMicros(100)
basic.clearScreen()
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
})
