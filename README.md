# my-stack-overflow
# My Stack-Overflow
My Stack-Overflow application is a web application developed using ReactJs and few other javascript libarires, this application acts like proxy of stack overflow website. We can use this site to enter our query and get the list of questions posted in the stack overflow website related to that entered query. 
Basically  this app uses the pullically avaialble stack exchange API's to get the search results from stack overflow. 
  Public API's used in this application.
  1. https://api.stackexchange.com/docs/search 
  2. https://api.stackexchange.com/docs/advanced-search

# functionalites 
1. UI has a search bar for the user to type in the query.
2. Displaying the returned list of questions with a link to view the answers to that question, which will re-direct the users to Stack-Overflow website.
3. App has a mechanism to cache the last 5 queried search terms in-memory along with the list of questions returned by StackOverflow so that subsequent requests for the same terms are fetched locally.
4. App uses browser localstorage to cache the last queries.
5. The UI also have a toggle control to switch between light and dark themes.
6. This application won't allow you to check the answers to those questions sent by stack overflow directly, But there will be a link which will re-direct you to that specific post in the stack overflow website 

# dependencies 
1. react-js 
2. type-script
3. CSS framework - material UI
4. styled-components
5. axios

# steps to run the project
### Prerequisites
1. NodeJs must be installed to run this project. 
    #### Install on Windows
- Use [Node Version Manager (NVM) for Windows](https://github.com/coreybutler/nvm-windows)
- Install NodeJS 14.16.0 x64
- Install the `windows-build-tools` npm package

#### Install on Mac, Linux, or Windows Subsystem for Linux
- Use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
- Install NodeJS 14.16.0 x64
- Make sure you have build tools installed (anything needed for `node-gyp` like `gcc`)

2. After taking the clone of this project , go to the src folder and open the git bash termianl or VS code terminal.
3. Run "npm install" to install all the necessary dependicies. Run "npm audit fix" afterwards(optional)
4. Run "npm start"
5. Application will be start running in default port 3000 on localhost, default URL will be  http://localhost:3000/ .

NOTE: if any of the dependicies mentioned in the package.json is not installed then you need to install it or save it separately.

