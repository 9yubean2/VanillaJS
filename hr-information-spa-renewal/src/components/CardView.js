import {cardDiv, cardPlane} from './Card.js';
import { setCardStatus } from "./Storage.js";
class CardView {
    constructor($main) {
        this.$main = $main;
    }

    infiniteScroll(container, localStroage) {
        
            let target = document.getElementById("cards_container").lastChild;
    
            const io = new IntersectionObserver((entry, observer) => {
                if(entry[0].isIntersecting) {
                    setCardStatus();
                    
                    for(let i = 0; i<localStroage.length; i++) {
                        const card = cardDiv(i);    // 카드의 레이아웃 요소
                        card.appendChild(cardPlane("front", localStroage[i].nickname));    // 카드 앞면의 요소
                        card.appendChild(cardPlane("back", localStroage[i].mbti));     // 카드 뒷면의 요소
                        container.appendChild(card);
                    }

                    this.infiniteScroll(container, localStroage);
                }
            }, {
                threshold: 0.7
            });
    
            io.observe(target);
        
    
    }

    render() {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "cards_container");
        this.$main.appendChild(containerDiv);

        setCardStatus();
        const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
        
        for(let i = 0; i<personalInfo.length; i++) {
            const card = cardDiv(i);    // 카드의 레이아웃 요소
            card.appendChild(cardPlane("front", personalInfo[i].nickname));    // 카드 앞면의 요소
            card.appendChild(cardPlane("back", personalInfo[i].mbti));     // 카드 뒷면의 요소
            containerDiv.appendChild(card);
        }

        
        // this.infiniteScroll(containerDiv, personalInfo);
    }
}
export default CardView;