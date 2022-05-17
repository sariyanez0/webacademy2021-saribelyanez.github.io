let intervalCalc = 0;
let forumOpacity = 1;
let resultOpacity = 0;
let switchToResult = true;
				
function submitForum () {
	let username = document.userform.input_username.value;
	let userEmail = document.userform.input_email.value;
	let userPhoneNum = document.userform.input_phoneNum.value;
	let usernameResult = document.getElementById("nameResult");
	let emailResult = document.getElementById("emailResult")
	let phoneResult = document.getElementById("phoneNumResult");
					
					
	usernameResult.innerHTML = username;
	emailResult.innerHTML = userEmail;
	phoneResult.innerHTML = userPhoneNum
					
	if(switchToResult){
		intervalCalc = setInterval(showResult,20);
	}
}	
				
	function showResult() {
		let forumCanvas = document.getElementById("before");
		let resultCanvas = document.getElementById("after");
					
		forumOpacity = Number(window.getComputedStyle(forumCanvas).getPropertyValue("opacity"));
					
		resultOpacity = Number(window.getComputedStyle(resultCanvas).getPropertyValue("opacity"));
					
	if(forumOpacity > 0) {
	forumOpacity -= 0.1;
	forumCanvas.style.opacity = forumOpacity;
} else if (resultOpacity < 1 && forumOpacity == 0){
	forumCanvas.style.display = "none";
	resultCanvas.style.display = "block";
	resultOpacity += 0.1;
	resultCanvas.style.opacity = resultOpacity;
} else {
	clearInterval(intervalCalc);
	switchToResult = false;
}
					
					
}
				
function returnHome() {
	if(switchToResult == false) {
clearTextbox();
intervalCalc = setInterval(showForum,20)
		}
}
				
				function clearTextbox() {
					document.getElementById("user_name").value = "";
					document.getElementById("user_email").value = "";
					document.getElementById("user_phoneNumber").value = "";
				}
				
				function showForum() {
					let forumCanvas = document.getElementById("before");
					let resultCanvas = document.getElementById("after");
					
					forumOpacity = Number(window.getComputedStyle(forumCanvas).getPropertyValue("opacity"));
					
					resultOpacity = Number(window.getComputedStyle(resultCanvas).getPropertyValue("opacity"));
					
					if(resultOpacity > 0) {
						resultOpacity -= 0.1;
						resultCanvas.style.opacity = resultOpacity;
					} else if (forumOpacity < 1 && resultOpacity == 0){
						resultCanvas.style.display = "none";
						forumCanvas.style.display = "block";
						forumOpacity += 0.1;
						forumCanvas.style.opacity = forumOpacity;
					} else {
						clearInterval(intervalCalc);
						switchToResult = true;
					}
					
					
				}
