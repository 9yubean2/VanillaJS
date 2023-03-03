export const setPersonalInfo = async () => {
    const response = await fetch("/web/src/data/new_data.json");
    const data = await response.json();

    // console.log(data);

    const personalInfo = data.map((el,idx)=>{
        return({
            idx:idx,
            name:el.name,
            email:el.email,
            nickname:el.nickname,
            role:el.role,
            mbti:el.mbti
        });
    });

    if(!localStorage.getItem("personalInfo")) {
        localStorage.setItem("personalInfo",JSON.stringify(personalInfo)); 
    }
}


export const setCardStatus = () => {
    if(!localStorage.getItem("cardStatus")) {
        localStorage.setItem("cardStatus", JSON.stringify([]));
    }
}