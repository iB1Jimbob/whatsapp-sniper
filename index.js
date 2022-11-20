const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
	authStrategy: new LocalAuth(),
	puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log(`Logged in as ${client.info.pushname}`);
    console.log(client);
});

client.on('message_revoke_everyone', (message, revoked_msg) => {
	console.log(message);
	console.log(revoked_msg);
});

client.initialize();
