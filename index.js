console.log("Hello world")
console.log(dataLayer)

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    dataLayer.push({
        event: "GTMEvent",
        eventCategory: "User Authentication",
        eventAction: "Click",
        eventLabel: "Test Event"
    })
    console.log('push event!!!')
})