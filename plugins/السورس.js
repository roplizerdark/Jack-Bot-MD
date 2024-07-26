let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝙼𝚅𝚁𝙾 𝙱𝙾𝚃〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت ادهم 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه αԃԋαɱ ƙԋαʅҽԃ〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*


*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/201274605652 ⊱⏣*


*✥━─━⌬〘Αʂƚɾσ 𝙱𝙾𝚃〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|المالك)$/i
export default handler
