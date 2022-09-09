let loginBtn = document.getElementById('loginBtn');
let msg = document.getElementById('msg');
let loginBox = document.getElementById('loginBox');
let dasbord = document.getElementById('dasbord');
let exit = document.getElementById('exit');



loginBtn.addEventListener('click',function(){
	let acc_no = document.getElementById('acc_no').value;
	let pass = document.getElementById('pass').value;

	if (acc_no=='') {
		msg="<span style='color:red;'>Please Enter Account number!</span>";
	}else if(pass==""){
		msg="<span style='color:red;'>Please Enter Password!</span>";
	}
	else{
		if (acc_no=='129850' && pass == "123456") {
			loginBox.style="display:none";
			dasbord.style="display:block";
			
		}else {
			msg="<span style='color:red;'>Wrong Account number or Password!</span>";
		}
	
	}
	document.getElementById('msg').innerHTML= msg;
});

// Deposit add function
let dbtn = document.getElementById('dbtn');
dbtn.addEventListener('click',function(){
	let dmoney = document.getElementById('dmoney').value;
	let depositBalance = document.getElementById('depositBalance');
	let totalDeposit = parseFloat(dmoney) + parseFloat(depositBalance.innerHTML);
	depositBalance.innerHTML = totalDeposit.toFixed(2);

	//main balance calculation
	let mbalance = document.getElementById('mbalance');
	
	let totalNewMbalance = parseFloat(dmoney) + parseFloat(mbalance.innerHTML);
	
	mbalance.innerHTML = totalNewMbalance.toFixed(2);
	
});

//Withdraw balance function
let wbtn = document.getElementById('wbtn');

wbtn.addEventListener('click',function(){
	let withdraw_input= document.getElementById('wbalance').value;
	let total_withdraw = document.getElementById('total_withdraw');
	let totalWbalance = parseFloat(withdraw_input) + parseFloat(total_withdraw.innerHTML);
	


	//withdraw form main balance
	let mbalance = document.getElementById('mbalance');
	let restMoney = parseFloat(mbalance.innerHTML) - parseFloat(withdraw_input);
	if (restMoney>500.00) {
		total_withdraw.innerHTML = totalWbalance.toFixed(2);
		mbalance.innerHTML = restMoney.toFixed(2);
	}else{
		warning= "<span class='text-danger'>Sorry insufficient Balance</span>"
	}
	
	document.getElementById('wmsg').innerHTML = warning;
	
});

//Exit system 
exit.addEventListener('click',function(){
	
	dasbord.style="display:none";
	loginBox.style="display:block";
	msg="<span style='color:red;'>Successfully Logout!</span>";
	document.getElementById('msg').innerHTML= msg;
});