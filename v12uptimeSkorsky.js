﻿require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("NzgzMzg4NjU4MjkxMTc5NTMx.X8aBig.O0jlq4n07y2eymdxrKl3kuOjVSY");
const fetch = require("node-fetch");
const fs = require('fs')

//Skorsky-Global#3229

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

//Arroiiz'<3#3273

client.on("ready", () => {

    console.log("Bot çalışıyor");
    let playing = client.voice.connections.size; 

    client.user.setPresence({ activity: { name: `Skorsky V12 Uptime Botu`, type: "STREAMING", url: "TWİTCH URL" } })

});



setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Pong! Requests sent")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "/ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("Botunuz Sistemimizde Zaten Var")
    message.channel.send("Botunuz Sistemimize Başarıyla Eklendi.");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("Lütfen Bir Link Giriniz ")
  })
  }
})
//Skorsky-Global#3229

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "/göster") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} Bot Aktif Tutuluyor!`)
}})


client.on("message", async message => {

  if(!message.content.startsWith("!eval")) return;
  if(!["IDNIZ","YARDIMCINIZIN ID SI  YARDIMCINIZ FALAN YOKSA VİRGÜLLERİ TIRNAKLARI SİLİN"].includes(message.author.id)) return;
  var args = message.content.split("!eval")[1]
  if(!args) return message.channel.send(":warning: | Kod?")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })
  
