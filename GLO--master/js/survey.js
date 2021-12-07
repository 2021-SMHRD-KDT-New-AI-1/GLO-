function bButton_click(){
    console.log('checkedBox is ' + document.getElementById('c20_4').checked);
    console.log('uncheckedBox is ' + document.getElementById('c20_3').checked);
    
    var sum = 0;
    var arr = new Array();
    for(var j = 0; j < 20; j++){
        arr[j] = "c"+ (j+1);
        console.log(arr[j]);
    }
    for(var k = 0; k <20; k++){
        eval("var radio_btn"+(k+1) + "=document.getElementsByName(arr[k])")         
        
    }

    console.log(radio_btn19.length);
  

    var radio_btn_checked = 0;

    
    for(var i =0; i < radio_btn1.length; i++){
        if(radio_btn1[i].checked==true){
            
            sum += parseInt(radio_btn1[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn2.length; i++){
        if(radio_btn2[i].checked==true){
            
            sum += parseInt(radio_btn2[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn3.length; i++){
        if(radio_btn3[i].checked==true){
            
            sum += parseInt(radio_btn3[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn4.length; i++){
        if(radio_btn4[i].checked==true){
            
            sum += parseInt(radio_btn4[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn5.length; i++){
        if(radio_btn5[i].checked==true){
            
            sum += parseInt(radio_btn5[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn6.length; i++){
        if(radio_btn6[i].checked==true){
            
            sum += parseInt(radio_btn6[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn7.length; i++){
        if(radio_btn7[i].checked==true){
    
            sum += parseInt(radio_btn7[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn8.length; i++){
        if(radio_btn8[i].checked==true){
           
            sum += parseInt(radio_btn8[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn9.length; i++){
        if(radio_btn9[i].checked==true){
            
            sum += parseInt(radio_btn9[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn10.length; i++){
        if(radio_btn10[i].checked==true){
            
            sum += parseInt(radio_btn10[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn11.length; i++){
        if(radio_btn11[i].checked==true){
            
            sum += parseInt(radio_btn11[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn12.length; i++){
        if(radio_btn12[i].checked==true){
            
            sum += parseInt(radio_btn12[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn13.length; i++){
        if(radio_btn13[i].checked==true){
           
            sum += parseInt(radio_btn13[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn14.length; i++){
        if(radio_btn14[i].checked==true){
           
            sum += parseInt(radio_btn14[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn15.length; i++){
        if(radio_btn15[i].checked==true){
            
            sum += parseInt(radio_btn15[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn16.length; i++){
        if(radio_btn16[i].checked==true){
            
            sum += parseInt(radio_btn16[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn17.length; i++){
        if(radio_btn17[i].checked==true){
            
            sum += parseInt(radio_btn17[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn18.length; i++){
        if(radio_btn18[i].checked==true){
            
            sum += parseInt(radio_btn18[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn19.length; i++){
        if(radio_btn19[i].checked==true){
           
            sum += parseInt(radio_btn19[i].value);
            radio_btn_checked++;
        }
    }
    for(var i =0; i < radio_btn20.length; i++){
        if(radio_btn20[i].checked==true){
            
            sum += parseInt(radio_btn20[i].value);
            radio_btn_checked++;
        }
    }

    if(radio_btn_checked !=20){
        alert("라디오 버튼을 선택해주세요")
        return;
    }else{
        radio_btn_checked==20
        console.log(sum);

        post_to_url("http://172.30.1.26:3002/in_survey", {'score': sum});

        function post_to_url(path, params, method) {
            method = method || "post"; // Set method to post by default, if not specified.
            // The rest of this code assumes you are not using a library.
            // It can be made less wordy if you use one.
            var form = document.createElement("form");
            form.setAttribute("method", method);
            form.setAttribute("action", path);
            for(var key in params) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
            document.body.appendChild(form);
            form.submit();
        
        
        
        //location.href = 'main.html';
        }
       // post_to_url("http://172.30.1.26:3002/survey", {'score': sum});

        
    }
}