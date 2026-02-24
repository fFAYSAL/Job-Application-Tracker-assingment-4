1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
▶ Answer : getElementById is used to select one specific elements using its unique ID.
            getElementsByClassName is used to select all elements with the same class name.
           querySelector is used to selects the first matching element using a css selector.
           querySelectorAll is used to select all matchig elements .
   
2. How do you create and insert a new element into the DOM?
▶ Answer : To create and insert a new element into the DOM, first we use document.createElement() to create the element, then we add content or attributes, and finally we insert it into the DOM using methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?
▶ Answer : Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements in the DOM.
           it's works When an event like a click happens on an element, it first runs on that element, then it propagates (bubbles) up to its parent, then to the parent’s parent, and continues up to the document.
   
4. What is Event Delegation in JavaScript? Why is it useful?
▶ Answer :  Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding separate listeners to each child element. The parent listens for
               events that bubble up from its children and handles them accordingly

5. What is the difference between preventDefault() and stopPropagation() methods?
▶ Answer : preventDefault() stops the browser’s default action for an event.
            stopPropagation() stops the event from bubbling up (or capturing down) the DOM.
