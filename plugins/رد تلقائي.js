
//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.     '*بحبك اكتر🌚❤*',  [m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
 
     ]; 
 }else if (/^كيفك| عامل اي$/i.test(m.text)) { 
     responses = [ 
'*الحمد لله بوجودك يا قلبي😩❤‍🔥*'



       
     
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي متور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ استرو عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
     responses = [ 
       '*كل شيء بخير الحمد لله* ',  
          ' *مش عارفه*  ',  
              ' *الحمد لله ماشي الحال* ',  
                  '*الحمد الله*',  
                      ' *لو انت كويس انا كويسه*' 
     ]; 
   }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
     responses = [ 
       'احترم نفسك يابابا ',  
          ' ااتادب بدل ما ادبك ',  
              'مش هتحترم نفسك ولا اي ',  
                  'الله يهديك ',  

     ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
     responses = [ 
       ' عاشت ايدك ✨💜',  
           'تسلم ايدك ✨💜 ',  
                'عاش ✨💜 ',  
                  'عاش دازاي ✨💜',  
                   'اوكي ✨💜' 
     ]; 
   }else if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       '*تدوم افراحك و تختفي احزانك🫶🏻* ',  
            ' *يزينكس يالي تضحك*',  
                   '*يدوم يدوم🙏🏻*  ',  
                         'ههه ',  
                         '😂😂😂',  
                         '*يزين اللي يضحك🥹*',  
                         'اضحك معاك؟',  
                             'دوم ' 
   ]; 
   }else if (/^استرو|استرو عمتك|يا ادهم$/i.test(m.text)) { 
     responses = [ 
       '*عيون استرو♥*',  
          '*قلب استرو ♥*',  
              '*يهلا يهلا🫶🏻*',  
                  '*اامر يا باشا🥹* ',  
                   '*آمر يحلو🫶🏻*' 

]; 
   }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
     responses = [
       
          '*قلب البوت ؟!*',  
              '*قول يا عمري*',  
         '*ممكن تنديني استرو*',  
 
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخضر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       '*ارجع نام بدري*',  
          '*صباحك دازاي😔✨*',  
              ' *صباح النور ✨🙏🏻*',  
                  '*صباح الدراسة😔* ',  
                   '*صباحك شاورما🤍*' 
     ]; 
   }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
     responses = [ 
       '*يسلمك و ينجحك🙏🏻*',  
          ' *أبشر أبشر في اي وقت💗🫴🏻*',  
              '*يسلمك و ينحفك✨*',  
                   '*يسلمك و يسمنك🙏🏻*' 
]; 
   }else if (/^🧡|💚|💞|💖|💜|💛|🤍 $/i.test(m.text)) { 
     responses = [ 
       'شكرا✨♥',  
          'تسلم✨♥',  
              '✨♥',  
                  'حبيبي✨💜',  
                   '✨💜' 
  ]; 
     }else if (/^كل ده نور|الجروب نور كده ليه|ايه منوره|منورين الجدد|منورين|منور $/i.test(m.text)) { 
     responses = [ 
       '*يهلا يهلا🙏🏻*',  
          '*نورت ي لمبه*✨',  
              '*شعشعت الجروب🥹*',  
                  '*نورت نورت🫶🏻*',  
                   '*نور عيونك🫴🏻*' 
  ]; 
   }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             'ملكش دعوه ', 
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
                 'لا مين انت ال هتسكتني ',  
                   'اسكت انت' 
     ];
   }else if (/^بوسه$/i.test(m.text)) { 
     responses = [ 
'*امووووه😘❤🏌🏻‍♂💔*'
   ]; 
   }else if (/^استرو تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^استرو تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  
            '*امووت فيك انا❤🥺*',  
                 '*احبك بجنون يا عمري🥺❤*',  

     ]; 
   }else if (/^نتزوج$/i.test(m.text)) { 
     responses = [ 
'موافق هاتو المازون'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله بخير بوجودك وانت اخبارك',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هلا بل غالي نورت ',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*امووت في حبك*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا بل غالي♥*',

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^ادهم$/i.test(m.text)) { 
     responses = [ 
       '*المطور: +201014576656*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;