
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   **Answer:** getElementById picks one element using its ID. getElementsByClassName picks all elements with the same class. querySelector picks the first element that matches a CSS selector, and querySelectorAll picks all matching elements.

2. How do you **create and insert a new element into the DOM**?

   **Answer:** To add a new element, you first create it with document.createElement(), set its content or properties, and then put it on the page with appendChild(), prepend(), or insertBefore().
   
3. What is **Event Bubbling** and how does it work?

   **Answer:** Event Bubbling is when an event starts from the element you click and then goes up to its parent elements.
  
4. What is **Event Delegation** in JavaScript? Why is it useful?

   **Answer:** Event Delegation is when a parent element handles events for its children. It’s handy because you don’t need separate listeners for each child, and it works for new elements too.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   **Answer:** preventDefault() stops the normal action of an element, like stopping a link from opening. stopPropagation() stops the event from moving up to parent elements.
