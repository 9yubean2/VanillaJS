import { input, select, button } from "./Form.js";
class SignupView {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "form_container");
        this.$main.appendChild(containerDiv);

        const form = document.createElement("form");
        form.setAttribute("id", "grepp_form");
        containerDiv.appendChild(form);

        input("text", "name", "이름",true);
        input("email", "email", "이메일",true);
        input("text", "nickname", "닉네임",true);

        const roleValList = ['backend','frontend','fullstack'];
        const roleTxtList = ['직군을 선택해주세요','백엔드','프론트엔드','풀스택'];

        const mbtiValList =  [ 'ENFJ', 'ENTJ', 'ENFP', 'ENTP', 'ESFJ', 'ESTJ', 'ESFP', 'ESTP', 
        'INFJ', 'INTJ', 'INFP', 'INTP', 'ISFJ', 'ISTJ', 'ISFP', 'ISTP'];
        const mbtiTxtList = [ 'MBTI를 선택해주세요', 'ENFJ', 'ENTJ', 'ENFP', 'ENTP', 'ESFJ', 'ESTJ', 'ESFP', 'ESTP', 
        'INFJ', 'INTJ', 'INFP', 'INTP', 'ISFJ', 'ISTJ', 'ISFP', 'ISTP'];
        
        select("role", roleValList, roleTxtList,"직군",true);
        
        select("mbti", mbtiValList, mbtiTxtList,"MBTI",false);

        button("submit", "등록");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

            let idx = personalInfo.length;
            let nameVal = e.target.name.value;
            let emailVal = e.target.email.value;
            let nicknameVal = e.target.nickname.value;
            let roleVal = e.target.role.value;
            let mbtiVal = e.target.mbti.value;

            const submitInfo = {
                idx : idx,
                name : nameVal,
                email : emailVal,
                nickname : nicknameVal,
                role: roleVal,
                mbti : mbtiVal,
            }

            
            console.log([...personalInfo,{...submitInfo}]);

            if(personalInfo.includes({email:emailVal})||personalInfo.includes({nickname:nicknameVal})){
                alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
            }else{
                localStorage.setItem("personalInfo", JSON.stringify([...personalInfo,{...submitInfo}]));
            }

            if(personalInfo!==JSON.parse(localStorage.getItem("personalInfo"))) {
                alert("성공적으로 등록되었습니다");
            }
        });
    }
}
export default SignupView;