import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos - 083/128",
         ja: "Ampharos -083/128",
         fr: "Ampharos - 083/128",
         de: "Ampharos - 083/128",
         es: "Ámpharos - 083/128",
         it: "Ampharos - 083/128",
         pt: "Ampharos - 083/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Energy Connect",
            ja: "エネルギー接続",
            fr: "Energy Connect",
            de: "Energieverbindung",
            es: "Energy Connect",
            it: "Connessione energetica",
            pt: "Energy Connect",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, you may take a basic Energy card attached to 1 of your Benched Pokmon and attach it to your Active Pokmon. This power can't be used if Ampharos is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前に）</em> </em>に頻繁に好きなように、ベンチ付きPokmonの1つに基本的なエネルギーカードを取り、アクティブなPokmonに取り付けることができます。 Ampharosが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour <em> (avant votre attaque) </em>, vous pouvez prendre une carte d'énergie de base attachée à 1 de votre pokmon bancaire et le fixer à votre pokmon actif. Cette puissance ne peut pas être utilisée si les ampharos sont affectés par une condition spéciale.",
            de: "So oft Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> mögen, können Sie eine grundlegende Energiekarte an 1 Ihres Bank -Pokmons nehmen und an Ihrem aktiven Pokmon anbringen. Diese Leistung kann nicht verwendet werden, wenn Ampharos von einem besonderen Zustand beeinflusst werden.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, puede tomar una tarjeta de energía básica adjunta a 1 de su banca Pokmon y adjuntarlo a su Pokmon activo. Esta potencia no se puede usar si Ampharos se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno <em> (prima del tuo attacco) </em>, puoi prendere una carta di energia di base collegata a 1 del tuo Pokmon in panchina e attaccarlo al tuo Pokmon attivo. Questa potenza non può essere utilizzata se Ampharos è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, você pode pegar um cartão de energia básico conectado a 1 do seu Pokmon bancado e conectá -lo ao seu Pokmon ativo. Esse poder não pode ser usado se os Ampharos forem afetados por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
          name: {
            en: "Lightning Strike",
            ja: "落雷",
            fr: "Grève de la foudre",
            de: "Blitzschlag",
            es: "Rayo",
            it: "Fulmini",
            pt: "Lightning Strike",
          },
          effect: {
            en: "You may discard all Lightning Energy cards attached to Ampharos. If you do, this attack's base damage is 80 instead of 40.",
            ja: "Ampharosに取り付けられたすべての稲妻エネルギーカードを破棄できます。そうした場合、この攻撃のベースダメージは40ではなく80です。",
            fr: "Vous pouvez éliminer toutes les cartes d'énergie Lightning attachées aux ampharos. Si vous le faites, les dégâts de base de cette attaque sont de 80 au lieu de 40.",
            de: "Sie können alle an Ampharos befestigten Blitzelenergiekarten verwerfen. Wenn Sie dies tun, beträgt der Grundschaden dieses Angriffs 80 anstelle von 40.",
            es: "Puede descartar todas las tarjetas de energía de Lightning unidas a Ampharos. Si lo haces, el daño base de este ataque es 80 en lugar de 40.",
            it: "Puoi scartare tutte le carte di energia fulmini attaccate agli anfAROS. Se lo fai, il danno base di questo attacco è 80 anziché 40.",
            pt: "Você pode descartar todos os cartões de energia da Lightning Anexados aos ânpharos. Se o fizer, o dano básico deste ataque é de 80 em vez de 40.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
