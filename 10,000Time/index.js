var tranningBtn = document.querySelector("#btn_result");
function test() {
    var fieldValue = document.querySelector("#gaming");
    var timeValue = document.querySelector("#study_time");

    if(fieldValue.vlaue == "") {
        alert('값이 입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (timeValue.vlaue == "") {
        alert('값이 입력되지 않았습니다.');
        timeValue.focus();
        return false;
    }

};

tranningBtn.addEventListener("click", test);