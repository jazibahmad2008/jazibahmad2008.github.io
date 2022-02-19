// Call a certain function every second 
setInterval(setClock, 1000)

// Set data attributes from HTML
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// Function to set Clock
function setClock() {
    const currentDate = new Date() // New data Constructer
    const secondsRatio = currentDate.getSeconds() / 60  // Seconds ratio is % of a min eg: .5 = 30sec .75 = 45sec
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// Function to set rotation and rotation property in css
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// Set clock as soon as page loads
setClock()