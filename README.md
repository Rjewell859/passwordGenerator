# passwordGenerator
This project will generate customized passwords with user defined criteria for characters and length.
The user simply clicks the generate password button to begin the process.
First the user is prompted for a password length in between 8 and 128 characters. 
Then there are options for numbers, lower-case letters, upper-case letters, and special characters. 
After all five prompts the users new random password will be displayed on the screen.


This utilizes an array to store the selected characters and then until the specified length
is reached, continues to concatenate random characters from that array. The key to this 
functionality is using Math.floor in combination with Math.random multipled by the 
characters arrays length minus one. 

Link to deployed website: https://rjewell859.github.io/passwordGenerator/

Link to repository: https://github.com/Rjewell859/passwordGenerator

Screenshot: ![passwordGeneratorImage](https://user-images.githubusercontent.com/66131189/180866721-25bdcaa7-52ca-4b92-884d-32be7da015ab.JPG)
