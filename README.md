# New-Product-Landing-Page

I am determined to learn media queries without using bootstrap!!!
feel free to leave notes


NOTE TO SELF : Keep It Simple 

design layout --> then add content





Objective 
Build a Product Landing Page
Objective: Build an app that is functionally similar to https://product-landing-page.freecodecamp.rocks

User Stories:

+ Your product landing page should have a header element with a corresponding id="header"
+ You can see an image within the header element with a corresponding id="header-img" (A logo would make a good image here)
+ Within the #header element, you can see a nav element with a corresponding id="nav-bar"
+ You can see at least three clickable elements inside the nav element, each with the class nav-link
When you click a .nav-link button in the nav element, you are taken to the corresponding section of the landing page
You can watch an embedded product video with id="video"
Your landing page has a form element with a corresponding id="form"
+ Within the form, there is an input field with id="email" where you can enter an email address
+ The #email input field should have placeholder text to let users know what the field is for
The #email input field uses HTML5 validation to confirm that the entered text is an email address
+Within the form, there is a submit input with a corresponding id="submit"
When you click the #submit element, the email is submitted to a static page (use this mock URL: https://www.freecodecamp.com/email-submit)
The navbar should always be at the top of the viewport
Your product landing page should have at least one media query
+Your product landing page should utilize CSS flexbox at least once
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Note: Be sure to add <link rel="stylesheet" href="styles.css"> in your HTML to link your stylesheet and apply your CSS

                                                                                                                                                
 /*  ***     font sizes      ***

***   REM   ***     1 rem = 16px    0.5rem = 8px    ***
Rem (short for “root-em”) units dictate an element's font size relative to the size of the root element. By default, most browsers use a font size value of 16px. So, if the root element is 16px, an element with the value 1rem will also equal 16px.

***   EM   ***      1em font size is equal to the current font size     ***
For example, if the font size of the body text is 16px, then 1em is also 16px. Ems are a scalable unit, meaning that they will change size in proportion to the font size. So, if the font size is increased to 24px, then 1em will also be 24px.
Ems are a useful unit for setting font sizes because they are responsive. This means that they will automatically adjust to the user's preferred font size settings. This is in contrast to other units, such as pixels, which will always be the same size regardless of the user's font size settings.
Ems can also be used to set other properties, such as margins and paddings. 
For example, the following CSS rule will set the margin of the body text to 1em:

body {
  margin: 1em;
} 

This will set the margin of the body text to the same size as the font size.
Ems are a versatile unit that can be used to set a variety of properties. They are a good choice for setting font sizes because they are responsive and scalable.

***     EM   -vs-    REM     ***
Rem and em are both relative units of length in CSS. They are both scalable, meaning that they will change size in proportion to the parent element. However, there is a key difference between the two units: rem is relative to the root element, while em is relative to the parent element. For example, if the font size of the root element is 16px, then 1rem will also be 16px. However, if the font size of the parent element is 24px, then 1em will be 24px.

    In general: 
    - rem is a good choice for setting font sizes, because it will ensure that the font size is responsive to the user's preferences. 
    - Em is a good choice for setting other properties, such as margins and paddings, because it allows you to set the size of the property relative to the parent element.

 ***     EM    -vs-    REM    -vs-    PX     ***  
em
A multiple of the font-size of the element it is used on. For example, if the font-size of a container is 2rem, then 1em is 32px inside the container.

rem
A multiple of the root font-size of your browser. For example, if the root-font size is 16px, then 1rem is 16px.

px
A fixed-size unit used for small elements like borders or shadows.

em and rem
Scalable units that meet web accessibility standards. They are better than px because they scale better and meet web accessibility standards.

px
An absolute measurement that hardcodes the font-size for all users. The user can't change the value.                                                                                                                                           
Here are some general guidelines for using em, rem, and px:
    - Use px for small, fixed-size elements like borders or shadows.
    - Use em for typography and other scalable elements that need to change size relative to their parent element.
    - Use rem for scalable typography and responsive layouts that need to change size relative to the root element.




***     RAW FORM  -  getgorm.io     ***


all forms submissions sent to amcmoore1120ka@outlook.com   -   "https://getform.io/f/d48e4eb7-edfd-4085-91e0-b4091e03f25f"

<form action="https://getform.io/f/d48e4eb7-edfd-4085-91e0-b4091e03f25f" method="POST">
    <p id="us">Contact Us: </p>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="text" name="message">
-->


<!-- add hidden Honeypot input to prevent spams -->

    <input type="hidden" name="_gotcha" style="display:none !important">
   


<!-- checkbox handle -->

    <input type="checkbox" name="subscribe" value="yes" checked>
    <input type="hidden" name="subscribe" value="no">
 


<!-- radio button handle -->

    <input type="radio" name="gender" value="male" checked>
    <input type="radio" name="gender" value="female">
    <input type="radio" name="gender" value="other">



<!-- select field handle -->

    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
    </select>
    <button type="submit">Send</button>
</form>