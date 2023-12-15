// › Galxy Ultra X7 ϟ

const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6281991410940'
global.gc = 'https://chat.whatsapp.com/DvesXIdnptNGDKbrFwi6t3'
global.ig = '@RADITX7'
global.email = 'raditya.yoga235@smk.belajar.id'
global.region = 'Indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Radit Is Here!!'
//=================================================//
global.owner = ['6281991410940']
//==========================BY Zhen X7=======================//
global.keyopenai = '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'
//====================BY Zhen X7=============================//
global.botname = 'Radit Is Here!!'
global.packname = 'Radit Is Here!!' // Nama Sticker
global.author = 'Radit Is Here!!' // Nama Sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Sesions'
global.sp = '⭔'
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})