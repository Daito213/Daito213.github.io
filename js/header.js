const navbar = document.querySelector(".navbar");
        const menu = document.querySelector(".menu");
        const logoRight = document.querySelector(".logo-right")
        
        //ヘッダーがulタグに来たら、ヘッダーを固定する。
        window.addEventListener("scroll", () => {
            if(window.pageYOffset >= menu.offsetTop){
                navbar.classList.add("sticky");
                logoRight.style.color = "white";
            }else{
                navbar.classList.remove("sticky");
                logoRight.style.color = "black";
            }

        })

