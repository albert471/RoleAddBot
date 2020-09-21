# RoleAddBot
lightweight discord bot to add a set of roles to all members of a discord server



How to use: 
First, you need to install node.js. You can find full instructions for installing libraries for nodeJS all over the internet.  Once you have it installed, you need to download the discordjs package. This can be done by typing "node install discord.js".  

Once you have everything installed, simply open the roleadd file and fillin the following information:
1) bot token.  You can get this by logging into the discord developer page and creating a bot.  Copy its token into disctoken.
2) target guild: Log into discord on the web or application, then make sure "developer mode" is on (from settings).  Rightclick the server icon, and click copy id.
3) roleswanted: For each role you want, you need to copy its id and paste it into the array.  You can do this by going to server settings -> roles -> right click the ones you want and copy id. 
4) admin: Due to how discord bots work, they can't assign roles to people with a higher role than them. What you want to do is move the bot's role up to the second highest option then copy the role id of the highest role. 

5) run the bot.  open terminal in the correct directory then type node roleadd.js to run the bot.  If it's working properly, you can go to the audit log to see the bot adding roles to everyone. Note that due to rate limits, this process might take a while (depending on the number of people on your server)

Note: due to how cacheing works on discord, sometimes a few members don't get a role.  Unfortunately, you'll manually have to assign roles in those circumstances.  Last time, this was used on a server with about 350 people, and there were 3 or so who didn't get a role.  (Also, you have to add the role to anyone with admin permissions as the bot cannot assign or remove roles from them). 

