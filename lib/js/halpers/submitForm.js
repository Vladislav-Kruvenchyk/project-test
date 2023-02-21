function  submitForm () {

    const form = document.forms["form"];
    const formArr = Array.from(form);
    const validFormArr = [];
    const button = form.elements["button"];

    formArr.forEach((el) => {
        if (el.hasAttribute("data-reg")) {
            el.setAttribute("is-valid", "0");
            validFormArr.push(el);
        }
    });

    form.addEventListener("input", inputHandler);
    form.addEventListener("submit", formCheck);

    function inputHandler({ target }) {
        if (target.hasAttribute("data-reg")) {
            inputCheck(target);
        }
    }

    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const errorSpan = el.nextElementSibling;
        const reg = new RegExp(inputReg);
        if (reg.test(inputValue)) {
            el.setAttribute("is-valid", "1");
            if (errorSpan) {
                errorSpan.style.display = "none";
            }
        } else {
            if (!errorSpan) {
                const newSpan = document.createElement("div");
                newSpan.innerHTML = `<div style="color: #0093E6 !important; position: absolute; margin-top: 5px">${"*"} <span style="font-weight: 400;font-size: 12px;line-height: 100%; color: #B4B4B4;">Lorem Ipsum is simply dummy <span/> </div> `;
                el.parentNode.insertBefore(newSpan, el.nextSibling);
            } else {
                errorSpan.style.display = "inline";
            }

        }
    }

    function formCheck(e) {
        e.preventDefault();
        const allValid = [];
        validFormArr.forEach((el) => {
            allValid.push(el.getAttribute("is-valid"));
        });
        const isAllValid = allValid.reduce((acc, current) => {
            return acc && current;
        });
        if (!Number(isAllValid)) {
            alert("Заполните поля правильно!");
            return;
        }
        formSubmit();
    }

    async function formSubmit() {
        const data = serializeForm(form);
        const response = await sendData(data);
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formReset();
        } else {
            alert("Код ошибки: " + response.status);
        }
    }

    function serializeForm(formNode) {
        return new FormData(form);
    }

    async function sendData(data) {
        return await fetch("/form-sending", {
            method: "POST",
            body: data,
        });
    }

    function formReset() {
        form.reset();
        validFormArr.forEach((el) => {
            el.setAttribute("is-valid", 0);
            el.style.border = "none";
        });
    }
}

export default  submitForm