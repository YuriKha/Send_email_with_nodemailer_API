Sending Emails with nodemailer (need to have Google account)

---
#### How to set up nodemailer with Google account
make sure to set it up with Gmail Account:
1. Visit the Google Account management page https://myaccount.google.com/
2. click on “Security”.
3. Scroll down to “How you sign in to Google” and click on “2-step verification”.
4. Scroll down to “App passwords.” Click on “App passwords.” 
You may be prompted to re-enter your password for security purposes.
5. Enter a custom name for this App Password.
6. Click the “Create” button.
 Google will generate a unique 16-character App Password for your custom application.
 make sure to write it down

---
#### Environment
make sure you set up in the .env file (after that add the file to .gitignore file)
PORT = the port number you want the app to run,
PROJECT_EMAIL = the Google Email adress that you set up the app,
PROJECT_PASS = the password that is given by Google.  (the unique 16-character)

make sure you put the .env file in .gitignore file or your password will be revealed by your next push to github.com

---
#### API - endpoint
send a POST request with the follow:

**[[http://localhost:process.env.PORT/mail/send]]**
send the request as POST with a string object as the example:
```json
{
    "To":"to whom you want to send the email <Email address>",
    "Subject":"Subject of the email",
    "Content":"The content of the email"
}
```

---
#### The app working on every Node.js v16.20.2 and UP 
did not tested on lower Node.js version
#### Dependencies 
mainly you just need the "express" & "nodemailer".
"cors" if you goin to upload to a cloud
"nodemon" & "morgan" can be installed as DevDependencies (npm i -D) 
"dotenv" from Node.js v20.6.0 you have a build in support for .env

* **cors:** 2.8.5
* **dotenv:** 16.4.5 (no need from Node.Js v20.6.0 and up)
* **express:** 4.19.2
* **morgan:** 1.10.0 (can be as: npm i -D) 
* **nodemailer:** 6.9.14
* **nodemon:** 3.1.4 (can be as: npm i -D) 

---
