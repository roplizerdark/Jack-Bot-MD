let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*https://chat.whatsapp.com/JUIGWaUEcvt7J06kaX9nPl*

*2_وتستطيع ان تتابع البوت على فيس بوك:-*
*https://www.facebook.com/roplizer?mibextid=ZbWKwL*

*3_وتستطيع دعم المطور من هنا:-*
*+201274605652*

*وشكرا لكم يا افضل مستخدمين 👾👑*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
