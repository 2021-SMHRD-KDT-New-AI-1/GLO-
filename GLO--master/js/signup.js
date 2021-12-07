
function signup(){

    console.log('checkedBox is ' + document.getElementById('gender1').checked);
    console.log('uncheckedBox is ' + document.getElementById('gender2').checked);
    console.log(document.getElementById("signup_id"))

    
    var chk_radio = document.getElementsByName('gender');
    var chk_radio2 = document.getElementsByName('res');

    var sel_type = "";
    var sel_type2 = "";
    var radio_btn_checked2 = 0;

   



    



        

		for(var i=0;i<chk_radio.length;i++){

			if(chk_radio[i].checked == true){ 
				sel_type = chk_radio[i].value;
                radio_btn_checked2++;
			}

		}

        for(var i=0;i<chk_radio2.length;i++){

			if(chk_radio2[i].checked == true){ 
				sel_type2 = chk_radio2[i].value;
                radio_btn_checked2++;
			}

		}
     
        var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        if(radio_btn_checked2 !=2) {
            alert("라디오 버튼을 선택해주세요")
            return;
        }else if(document.getElementById("signup_id").value == "" ){
            alert("ID값을 확인해주세요");
        }else if(document.getElementById("signup_id").value.search(/\s/) != -1){
            alert("공백을 사용할 수 없습니다");
        }else if(document.getElementById("signup_age").value.search(/\s/) != -1){
            alert("공백을 사용할 수 없습니다");
        }else if(document.getElementById("signup_pw").value.search(/\s/) != -1){
            alert("공백을 사용할 수 없습니다");
        }
        else if(special_pattern.test(document.getElementById("signup_age").value)==true){
            alert("나이에 특수문자를 사용하실 수 없습니다");
        }

        else if(document.getElementById("signup_pw").value == "" ){
            alert("PW값을 확인해주세요");
        }else if(document.getElementById("signup_age").value == ""){
            alert("나이를 확인해주세요");
        }
        else{
            post_to_url("http://172.30.1.26:3002/signup_w", {'id': document.getElementById("signup_id").value,'pw' : document.getElementById("signup_pw").value,
            'age' : document.getElementById("signup_age").value, 'gender': sel_type, 'res' : sel_type2 });
            
          
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
                
            
            
                alert("실행됨");
               // location.href = 'login.html';
                //window.location.href = 'login.html';
                
                window.open('login.html');
            
            }
            //document.location.href = "login.html";
            //location.replace("login.html");
            //self.location = 'login.html';
            //window.location.href = 'login.html';
        }
        
        

		
}



