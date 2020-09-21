//=====================================================================================    
//=====================================================================================
//                                  Roleadd.js
// * Basic discord bot written in Javascript (Discord.js)
// * Basic bot that adds a set of roles to 
// * @author: Albert471
// * @version: 1.0.0 (probably won't release updates)
//=====================================================================================

//when you add your bot, make sure to set its role to the second highest possible.
//then, take the id of the role above it and put it under "admin".
//fill roleswanted array with the ids of all roles you want everyone to have
const disctoken = ``; //bot's token
const targetGuild = ``; //id of guild to add roles
const roleswanted = [``,``,``];
const admin = ``;//id of role above the bot's role
const Discord = require(`discord.js`);
const client = new Discord.Client();
client.login(disctoken);
/**               Client ready listener
    performs these commands when bot is turned on    **/
client.on(`ready`, () => 
{
    roleAdd();
});

//adds the roles in roleswanted to everyone in targetguild 
//excluding bots and people with higher perms (discord policy)
async function roleAdd() {
    guild = client.guilds.cache.get(targetGuild);
    guild.members.cache.each(m => {
       if (m.roles.cache.has(admin) || m.user.bot) {
        console.log("pog");
    } else {
        for (r of roleswanted) {
            if (!m.roles.cache.has(r)) {
                console.log("added");
                m.roles.add(r)
                .catch(e=> console.error(e));
            }
        }
    }
    });
}