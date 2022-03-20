const div = document.createElement('div');
div.innerHTML = `<div class="container">
<div class="chatbox">
 <div class="col-1"><div class="msg-row">
     <div class="msg-text">
         <h2>Oshane Design</h2>
         <p>I am waiting for your reply</p>
     </div>
     <img src="image 1.png" class= "msg-img"alt="" srcset="">
 </div>
     <div class="msg-row msg-row2">
     <img src="image 2.png" class= "msg-img"alt="" srcset="">    
     <div class="msg-text">
         <h2>Jessica Bell</h2>
         <p>I would like to go for a morning walk from tomorrow onwards.You can also join me anytime</p>
     </div>
 </div>
 <div class="msg-row">
     <div class="msg-text">
         <h2>Oshane Design</h2>
         <p>Great, I will be joining soon</p>
     </div>
     <img src="image 1.png" class= "msg-img"alt="" srcset="">
 </div>
 <input type="text" placeholder="Type your message here...">
</div>
 <div class="col-2">
     <h3>Friend List</h3>
     <ul>
         <li class="online">Chris Evans</li>
         <li class="offline">Leonardo Dacapri</li>
         <li class="busy">George Clooney</li>
         <li class="online">Jennifer Lawrence</li>
         <li class="busy">Margot Robbie</li>
         <li class="offline">Johnny Depp</li>

     </ul>
 </div>
</div>
<br>

</div> 
<footer>
<div class="copyright">© 2021 Copyright: oshanedesign.com</div>
</footer>`
document.body.append(div);