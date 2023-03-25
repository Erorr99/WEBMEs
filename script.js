let langwrap = document.querySelector(".langwrap"),
    link = document.querySelectorAll("a")
    title = document.querySelector(".topline"),
    description = document.querySelector(".description"),
    // content = document.querySelector(".content");

    link.forEach(el=>{
        el.addEventListener("click", function(e){
            langwrap.querySelector(".active").classList.remove("active")
            el.classList.add("active");

            let attr = el.getAttribute("language")

            title.textContent = data[attr].title;
            description.textContent = data[attr].description;
            // content.textContent = data[attr].content;
        });
    })
let data ={
    "thai":
    {
        "title": "สวัสดี",
        "description":
        "ผมชอบการ คิดสร้างสรรค์ และ ชอบวาดรูป จึงเอามารวมด้วยกันกับ การเขียน Code รวม2 อย่างเข้าด้วยกัน มันโคตรเจ๋ง"
        // ,"content":
        //  "สวัสดี  ผมชื่อ ณัฐวี เรียก วี  ก็ได้ผมเป็นคนไทยผมเรียนวิทยาการคอมพิวเตอร์ มันน่าหงุดหงิดและสนุกในเวลาเดียวกัน 555 ผมชอบวาดรูปและเล่นเกม (ส่วนใหญ่เป็นเกม) แต่ช่วงนี้ผมก็เล่นดนตรี แล้วมาวุ่นวายกับการเขียนโค้ดจึงเป็นที่มาของเว็บไซต์นี้"
    },
    "english":
    {
        "title": "Hello",
        "description":
        "I like to think, create, and draw, so I combined them with writing code. Combine 2 things together, it's AWESOME"
        // ,"content":
        // "HI! My name is Nuttawee but you can call me V! I'm from Thailand.I'm studying computer science.It's frustrating and fun at the same time lol I like to draw and play games (mostly games), but lately I've been playing music. and then bothering to write code is therefore the origin of this website"

    }
}

