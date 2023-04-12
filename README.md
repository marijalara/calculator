Calculator in React

Goal

The goal is to create calculator application with same basic function like addition, subtraction, division, multiplication.

npm start

I created react app with name calculator and started my project with npm start.

I created App file where I had variable btnValues with all numers and with operation stuffs. I created another folder context next to components. In that folder I created CalcContext file where I created Context and Provider, here I also created state calc for sign, num and res. This context I had import to App file.
I the folder componets I created a new file named Wrapper with props children. After that I created Screen file where I had import CalcContext and used that context. I also created ButtonBox file with props children. All of this files I had import in App file.
I created Button file where I had variable getStyleName with name for every operation. I had import CalcContext and I set useContext. In that file I created CommaClick function and added same code for that operation. For button AC I created ResetClick with same code for that function, for the click nubmers I created handleClickButton function with same code for that operation and here we also had if statement. For click operation I created SignClick function with same code for that operation. For click equals I created EqualsClick function with same code for that operation and I had here if statement. For click presen I created PresenClick function with same code for that operation. For click invert button I created InvertClick function with same code for that operation. And in the end of this file I had button and onClick for that button, so I created handleClick function with variable result which refer to the conditional and I had here if stetement. 
This file I had import in App file, to display this button I needed to use map statement. 
I created index.css for stayling this application.