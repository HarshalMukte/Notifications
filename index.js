const noOfNotifications = document.querySelectorAll('.notification_box p').length
const notificationNumber = document.querySelectorAll('.number')

notificationNumber.forEach((e) => e.innerText = noOfNotifications)



//for dragging
const notification = document.querySelector('.notification')
const notification_checkbox = document.querySelector('#notification_checkbox')

const dragFunction = (e) => {
    const pageX = e.clientX 
    const pageY = e.clientY 

    notification.style.left = pageX + 'px'
    notification.style.top = pageY + 'px'

    //for grabbing cursor 
    notification.style.cursor = 'grabbing'

    //for adding class to notification
    notification.classList.add('grabbing')

    //for default checked of checkbox
    notification_checkbox.checked = false
    notification_checkbox.style.pointerEvents = 'none'
}

let setTime;

notification_checkbox.addEventListener('mousedown', (e) => {

    setTime = setTimeout(() => {
        document.addEventListener('mousemove', dragFunction)    
    }, 200);
})

document.addEventListener('mouseup', () => {
    //for grabbing cursor 
    notification.style.cursor = 'pointer'
    document.removeEventListener('mousemove', dragFunction)
    
    //for default checked of checkbox
    notification_checkbox.style.pointerEvents = 'all'

    //for removing class to notification
    notification.classList.remove('grabbing')

    //clearing the setTimeout
    clearTimeout(setTime)

})


