let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
『𝙼𝚅𝚁𝙾🇪🇬』
*· · • • • • ✦ • • • • · ·*
*⌬ ❛╏ اهلا,* ${name}⁩
*⌬ ❛╏ الوقت:${wib}
*⌬ ❛╏ التاريخ:${date}
*⌬ ❛╏ المستخدمين:${rtotal}
*⌬ ❛╏ المنصه ⩾ 𝐻𝐸𝑅𝛩𝐾𝑈
*· · • • • • ✦ • • • • · ·*
*₪↲ معلومات المطور ┆⥌❄️⥍*
*⌬ ❛╏𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫🇪🇬╏❛ ⌬* *اسم المطور*

*⌬ ❛╏𝙼𝚅𝚁𝙾╏❛ ⌬* *لقب المطور* 

*⌬ ❛╏https://wa.me/201208386317 ╏❛ ⌬* ‬‏*رقم المطور
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 -----------------------------
  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:https://www.instagram.com/m_vro1?igsh=OGQ5ZDc2ODk2ZA==
  ----------------------------- 
`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/eeb2e29a434b5dad1a36d.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['الصانع'] 
export default handler
