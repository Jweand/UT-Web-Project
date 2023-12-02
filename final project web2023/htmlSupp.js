
////sign up / longin form close mode - لاغلاق نافذة التسجيل بمجرد الضغط على اي شيئ خارج النافذة
// Get the modal
var modal = document.getElementById('signupForm');
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let registeredUsers = [];

        function registerUser() {
          const username = document.getElementById("username").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirmPassword").value;
        
          if (password !== confirmPassword) {
            document.getElementById("signupMessage").textContent = "Passwords do not match!";
            return false;
          }
  

       if (validateEmail(email)) {
      document.getElementById("validationMessage").textContent = "Email is valid!";
      return true;
       } else {
      document.getElementById("validationMessage").textContent = "Please enter a valid email!";
      return false;
    }
}
  
        function validateEmail(email) {
    // تعريف نمط للتحقق من البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        // التحقق من صحة البريد الإلكتروني باستخدام النمط
         return emailPattern.test(email);
        }

        
          if (registeredUsers.find(user => user.username === username)) {
            document.getElementById("signupMessage").textContent = "Username already exists!";
            return false;
          }
        
          registeredUsers.push({ username,email, password });
        
          document.getElementById("signupMessage").textContent = "Registration successful!";
          return true;
        
    
/*  
        function loginUser() {
          const username = document.getElementById("loginUsername").value;
          const password = document.getElementById("loginPassword").value;
        
          const user = registeredUsers.find(user => user.username === username && user.password === password);
        
          if (user) {
            document.getElementById("loginMessage").textContent = "Login successful!";
            return true;
          } else {
            document.getElementById("loginMessage").textContent = "Invalid username or password!";
            return false;
          }
        }
*/

/////email validation - تحقق من صحة البريد
function validateForm() {
    // الحصول على قيمة البريد الإلكتروني المدخل من المستخدم
    var emailInput = document.getElementById("emailInput").value;
  
    // تحقق من صحة البريد الإلكتروني باستخدام الدالة validateEmail
    if (validateEmail(emailInput)) {
      document.getElementById("validationMessage").textContent = "Email is valid!";
      return true;
    } else {
      document.getElementById("validationMessage").textContent = "Please enter a valid email!";
      return false;
    }
  }
  
  function validateEmail(email) {
    // تعريف نمط للتحقق من البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // التحقق من صحة البريد الإلكتروني باستخدام النمط
    return emailPattern.test(email);
  }
