class Typing {
               constructor(prop) {
                              this.element = document.querySelector(prop.element)
                              this.information = this.element.innerHTML.trim()
                              this.element.innerHTML = ""
                              setTimeout(() => {
                                             this.write()
                              }, 1000);
               }
               write(i = 0) {
                              this.element.innerHTML += this.information[i]
                              i++
                              if (i < this.information.length) {
                                             setTimeout(() => {
                                                            this.write(i)
                                             }, 150);
                              }
                              else if (i == this.information.length) {
                                             setTimeout(() => {
                                                            this.element.innerHTML = ""
                                                            i = 0
                                                            this.write(i)
                                             }, 4000);
                              }
               }

}
class Writing {
               constructor(prop) {
                              this.element = document.querySelector(prop.element)
                              this.information = this.element.innerHTML.trim()
                              this.delay = prop.delay
                              this.interval = prop.interval
                              this.element.innerHTML = ""
                              setTimeout(() => {
                                             this.write()
                              }, this.delay);
               }
               write(i = 0) {
                              this.element.innerHTML += this.information[i]
                              i++
                              if (i < this.information.length) {
                                             setTimeout(() => {
                                                            this.write(i)
                                             }, this.interval);
                              }
               }

}
new Typing({
               element: ".second-title"
})

let order = document.querySelector(".order")
let shadow = document.querySelector(".shadow")
let third_section_box = document.querySelector(".third-section-box")
let person_image = document.querySelector(".person-image")
let star_box = document.querySelector(".star-box")
let audio = document.querySelector(".audio")
order.addEventListener("click", function () {
               audio.play()
               shadow.style = `display: none`
               third_section_box.style = `opacity: 1; transition: 1s;`
               person_image.style = `animation-name: image-ready;`
               setTimeout(() => {
                      star_box.style = `opacity: 1; transition: 1s`        
               }, 16000);
               new Writing({
                              element: ".name",
                              delay: 2500,
                              interval: 150
               })
               new Writing({
                              element: ".profession",
                              delay: 4500,
                              interval: 150
               })
               new Writing({
                              element: ".summary",
                              delay: 17000,
                              interval: 110
               })
})
