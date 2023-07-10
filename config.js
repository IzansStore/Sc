global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." // Command prefix
global.ownNumb = "+6289526864371" // Nomor owner
global.ownName = "KeepStore" // Nama owner

/* Alpha1.0-main
nomer owmer satu aja, jangan d kasih duoble.
prefix nya single, ga multi.
prefix default "." (titik) kalo mau ganti ganti aja.
version; 1.0 */

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = "req(62-8S57547ms11).287p"
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})