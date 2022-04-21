$(function(){
    //CONTACT
    $(".alert").hide();
    $("#submitBtn").click(function(){
        var sendFlag = true;

        if(!$("#nameText").val()){
            $("#nameSection .alert").show();
            sendFlag = false;
        } else {
            $("#nameSection .alert").hide();
        }

        if(!$("#kanaText").val()){
            $("#kanaSection .alert").show();
            sendFlag = false;
        } else {
            $("#kanaSection .alert").hide();
        }

        if(!$("#email").val()){
            $("#emailSection .alert").show();
        } else {
            $("#emailSection .alert").hide();
        }

        if(!$("#emailChk").val()){
            $("#emailChkSection .alert").show();
        } else {
            $("#emailChkSection .alert").hide();
        }

        if(!$("#post").val()){
            $("#postSection .alert").show();
        } else {
            $("#postSection .alert").hide();
        }

        if ($("#prefSection select").val() == "none") {
            $("#prefSection .alert").show();
            sendFlag = false;
        } else {
            $("#prefSection .alert").hide();
        }

        if(!$("#address").val()){
            $("#addressSection .alert").show();
        } else {
            $("#addressSection .alert").hide();
        }

        if(!$("#address2").val()){
            $("#address2Section .alert").show();
        } else {
            $("#address2Section .alert").hide();
        }

        if(!$("#tel").val()){
            $("#telSection .alert").show();
        } else {
            $("#telSection .alert").hide();
        }

        var checkBox = $('input[name="check"]:checked').length;

        if (checkBox == 0) {
            $("#checkSection .alert").show();
            sendFlag = false;
        } else {
            $("#checkSection .alert").hide();
        }

        if(sendFlag == false){
        return false;
        }
    });

});