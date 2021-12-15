let pc1;
let pc2;
let sonuc;



    function zarat (){
        pc1 = Math.ceil(Math.random() * 100);
        pc2 = Math.ceil(Math.random() * 100);
        
        console.log(pc1, pc2);
        
        if (pc1 > 0 && pc1 <= 33) {
            pc1 = "tas";
        } else if (pc1 > 33 && pc1 <= 66) {
        
            pc1 = "kagıt";
        } else if (pc1 > 66 && pc1 <= 100) {
        
            pc1 = "makas";
        }
        
        console.log(`pc1: ${pc1}`);
        
        
        if (pc2 > 0 && pc2 <= 33) {
            pc2 = "tas";
        } else if (pc2 > 33 && pc2 <= 66) {
        
            pc2 = "kagıt";
        } else if (pc2 > 66 && pc2 <= 100) {
        
            pc2 = "makas";
        }
        
        console.log(`pc2: ${pc2}`);
        
        switch (pc1) {
            case "tas":
                if (pc2 === "tas") {
                    console.log("berabere")
                    sonuc ="berabere"
                } else if (pc2 === "kagıt") {
                    console.log("pc2 kazandı")
                    sonuc ="pc2 kazandı"
                } else if (pc2 === "makas") {
                    console.log("pc1 kazandı")
                    sonuc ="pc1 kazandı"
                }
                break;
        
            case "kagıt":
                if (pc2 === "tas") {
                    console.log("pc1 kazandi")
                    sonuc ="pc1 kazandı"
                } else if (pc2 === "kagıt") {
                    console.log("berabere")
                    sonuc ="berabere"
                } else if (pc2 === "makas") {
                    console.log("pc2 kazandı")
                    sonuc ="pc2 kazandı"
                }
                break;
        
        
            case "makas":
                if (pc2 === "tas") {
                    console.log("pc2 kazandi")
                    sonuc ="pc2 kazandı"
                } else if (pc2 === "kagıt") {
                    console.log("pc1 kazandı")
                    sonuc ="pc1 kazandı"
                } else if (pc2 === "makas") {
                    console.log("berabere")
                    sonuc ="berabere"
                }
                break;
        
            }
        
            document.getElementById("pc1h3").innerHTML=pc1;
            document.getElementById("pc2h3").innerHTML=pc2;
            document.getElementById("sonuc").innerHTML=sonuc;

    }
