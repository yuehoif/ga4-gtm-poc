console.log("Hello world")
console.log(dataLayer)

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    dataLayer.push({
        event: "GTMEvent",
        eventCategory: "User Authentication",
        eventAction: "Click",
        eventLabel: "ExpressLogin_EN_Email"
    })
    console.log('push event')
})