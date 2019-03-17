const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
	if (message.content === '#ping') {
		message.reply('pong ta mère la pute');
		message.delete(5000);
	}
	
	if (message.content === '#malek') {
		message.channel.send("LONGUE VIE AU KFCCCCCCCCC", {
		file: "./kfc.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#list') {
		message.reply("#ping, #malek, #fox, #elogo, #lilou, #yaka, #julius; #undo, #map");
		message.delete(5000);
	}
	
	if (message.content === '#fox') {
		message.channel.send("HK", {
		file: "./index.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#ryu') {
		message.channel.send("Mcdo", {
		file: "./ham.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#lilou') {
		message.channel.send("Cougar geek", {
		file: "./lilou.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#yaka') {
		message.channel.send("Hé oué Man !", {
		file: "./joint.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#elogo') {
		message.channel.send("MAIS PUTAIN ÇA M'ENERVE !!!!!", {
		file: "./rage.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#julius') {
		message.channel.send("Quand je chante je suis un chbeb !", {
		file: "./bilal.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#nours') {
		message.channel.send("Rêver trop grand !", {
		file: "./psg.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#undo') {
		message.channel.send("Ça me fait une belle jambe !", {
		file: "./jambe.jpg"});
		message.delete(5000);
	}
	
	if (message.content === '#map') {
		let number = 7;
		
		var imagenumber = Math.floor(Math.random()*(11 - 1 + 1)+ 1);
		message.reply( {files: ["./cartes/" + imagenumber + ".jpg"]})
        .then(msg => { message.delete(5000)})
        .catch(console.error);
	}
	
	
	if(message.author.id === '554794166119301121') {
		
		message.delete(30000)
		console.log(message.delete);
	}
	
	if (message.content === '#clear') {
		if (message.channel.type == 'text') {
			message.channel.fetchMessages()
			.then(messages => {
				message.channel.bulkDelete(messages);
				messagesDeleted = messages.array().length; // number of messages deleted
				
				// Logging the number of messages deleted on both the channel and console.
				message.channel.sendMessage("Suppresion des messages. Total messages supprimés: "+messagesDeleted);
				console.log('Suppresion des messages. Total messages supprimés: '+messagesDeleted)
			})
			.catch(err => {
				console.log('Error while doing Bulk Delete');
				console.log(err);
			});
		}
	}
})

bot.login(process.env.TOKEN)
