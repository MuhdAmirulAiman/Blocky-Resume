# Blocky-Resume

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/28200932/118939015-d88d7100-b981-11eb-8ad8-d3b8f0db6d52.png">
</p>




Steps:
1. Start Ganache and start an instance.
2. Log in Metamasak and hook it to website.
3. Select Resume File and generate hash.
4. Choose the option: Send to blockchain / Verify Resume.
5. Profit.


Installation Process
There are a lot of dependencies needed in order to run the web application.
1.	Download and install Ganache from Truffle Suite.
    https://www.trufflesuite.com/ganache 

2.	Open Ganache and start an instance.

3.	Install MetaMask in Google Chrome.
    https://metamask.io/ 

4.	Open MetaMask and add network and select Custom RPC.

5.	Input any Network name desired, and put “http://127.0.0.1:7545/” without “.

6.	Import account to MetaMask. (The key can be obtained from Ganache)

7.	Download NodeJs.
    https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi 

8.	Make sure to install all of the tools that come with NodeJs, such as npm and visual studio code. 

9.	Download the Blocky-Resume and extract it.

10.	Open the extracted file with Visual Studio Code in administrator mode and open a terminal inside it.

11. Create another file dependency by typing command “npm install” without “.

21.	Deploy contracts to the network by typing command “truffle migrate --reset” without “.

22.	Go to the frontend folder by typing command “cd frontend” without “.

23.	Create another file dependency by typing command “npm install” without “.

24.	Start the server by typing command “npm start” without “.

25.	A website browser will automatically pop-up with the webpage.

26.	Wait a couple of seconds, and the website will load fully.

27.	If there is an error, recheck the Metamask account. Make sure that the account is connected to the site.
