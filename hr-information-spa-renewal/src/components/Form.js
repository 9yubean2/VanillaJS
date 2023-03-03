export const input = (type, id, text,required) => {
    const span = document.createElement("span");
    span.setAttribute("class", "form_elem");

    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("placeholder", text);

    if(required) {
		input.setAttribute("required", "");
	}

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.appendChild(document.createTextNode(text));
    const markSpan = document.createElement("span");
    markSpan.setAttribute("class", "mark");
    markSpan.appendChild(document.createTextNode("(필수*)"));

    label.appendChild(markSpan);

    span.appendChild(label);
    span.appendChild(input);

    if(id == "name") {
        input.setAttribute("pattern", "^([가-힣]){2,4}$");
        input.setAttribute("title", "2~4 글자의 한글만 입력이 가능합니다.");
    } else if(id == "email") {
        input.setAttribute("pattern", "^^[0-9a-zA-Z]+@grepp.co$");
        input.setAttribute("title", "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.");
    }else if(id == "nickname") {
        input.setAttribute("pattern", "^^[a-zA-Z]{3,10}$");
        input.setAttribute("title", "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.");
    }
    

    document.getElementById("grepp_form").appendChild(span);
}

export const select = (id, optValList, optTxtList, text,required) => {
    const span = document.createElement("span");
    span.setAttribute("class", "form_elem");

    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", id);

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.appendChild(document.createTextNode(text));

    if(required) {
		select.setAttribute("required", "");
        const markSpan = document.createElement("span");
        markSpan.setAttribute("class", "mark");
        markSpan.appendChild(document.createTextNode("(필수*)"));

        label.appendChild(markSpan);
	}


    for(let i = 0; i < optValList.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", optValList[i]);
        option.appendChild(document.createTextNode(optTxtList[i]));
        select.appendChild(option);
    }

    span.appendChild(label);
    span.appendChild(select);
    
    document.getElementById("grepp_form").appendChild(span);
}

export const button = (type, text) => {
    const span = document.createElement("span");
    span.setAttribute("class", "form_elem");

    const button = document.createElement("button");
    button.setAttribute("type", type);
    button.appendChild(document.createTextNode(text));

    span.appendChild(button);
    document.getElementById("grepp_form").appendChild(span);
}