let handler = async (m, { command, text }) => m.reply(`
*◈╎اسـئـل استرو╎◈*
  
*السؤال:* ${text}
*الاجابة:* ${['ايوه 😂','اكيد','ايوه اكيد ومتاكد كمان','ف الاغلب لا','لا','مستحيل'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^هل$/i
export default handler
