<!-- ################ 'One' ################ -->

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  
  a. getElementById works on element with a specific id.Ex: document.getElementByID('test');
  b. getElementsByClassName works on all element of a class.Ex: document.getElementsByClassName('test');
  c. querySelector works on the first matching element with a css selector.Ex: document.querySelector('.test');
  d. querySelectorAll works with all matching element using css selector.Ex:document.querySelectorAll('.test');

<!-- ################ 'TWO' ################ -->
# 2. How do you create and insert a new element into the DOM?
    
    a. create new element :    let div = document.createElement('div');
    b. add html content   :    div.innerHTML = `<p>Hello PH</p>`;
    c. set in dom         :    document.body.appendChild(div);

<!-- ################# 'Three' ############### -->

# 3. What is Event Bubbling and how does it work?

  a. Event Bubbling is the spreading of events from the lower element to the upper parent.
  b. From child to parent bubbling.
  Ex: 
  <div id="one">
    <p id="two"></p>
  </div>

  document.getElementById('one').addEventListener('click', function(){
    console.log("Hello One");
  });
   document.getElementById('two').addEventListener('click', function(){
    console.log("Hello Two");
  });

<!-- ################# 'Four' ############### -->


# 4. What is Event Delegation in JavaScript? Why is it useful?

  a. Event Delegation is placing a listener on the parent element and handling the events of the child element.
   Ex: 
     document.getElementById('one').addEventListener('click', function(e){
      e.preventDefault();
     });
  b. Also works on new dynamically added child.
  
<!-- ################# 'Five' ############### -->

# 5. What is the difference between preventDefault() and stopPropagation() methods?
   a.  preventDefault(): Stop the browser's default action.Ex: form submit stop.
   b.  stopPropagation(): Stop the event Bubbling and capturing. Ex: stop listener in parent element.