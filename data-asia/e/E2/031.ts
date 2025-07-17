import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Suicune - 031/092",
         ja: "Suicune -031/092",
         fr: "Suine - 031/092",
         de: "Suicune - 031/092",
         es: "Suicune - 031/092",
         it: "Suicune - 031/092",
         pt: "Suicune - 031/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [245],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Pure Body",
            ja: "純粋な体",
            fr: "Corps pur",
            de: "Reiner Körper",
            es: "Cuerpo puro",
            it: "Corpo puro",
            pt: "Corpo puro",
          },
          effect: {
            en: "Whenever you attach a Water Energy card from your hand to Suicune, discard an Energy card attached to Suicune. (You can't attach a Water Energy card from your hand if Suicune has no Energy cards attached.)",
            ja: "手からSuicuneに水エネルギーカードを取り付けるときはいつでも、Suicuneに取り付けられたエネルギーカードを捨ててください。 （Suicuneにエネルギーカードが添付されていない場合、手から水エネルギーカードを取り付けることはできません。）",
            fr: "Chaque fois que vous attachez une carte d'énergie de l'eau de votre main à Suine, jetez une carte d'énergie attachée à Suine. (Vous ne pouvez pas fixer une carte d'énergie de l'eau de votre main si Suine n'a pas de cartes d'énergie attachées.)",
            de: "Wenn Sie eine Wasserergiekarte von Ihrer Hand an Suicune anbringen, entsorgen Sie eine an Suicune befestigte Energiekarte. (Sie können keine Wasserergiekarte von Ihrer Hand anbringen, wenn Suicune keine Energiekarten befindet.)",
            es: "Cada vez que adjunta una tarjeta de energía de agua de su mano a Suicune, deseche una tarjeta de energía unida a Suicune. (No puede adjuntar una tarjeta de energía de agua de su mano si Suicune no tiene tarjetas de energía adjuntas).",
            it: "Ogni volta che si attacca una carta energetica dell'acqua dalla mano a Suicune, scartare una carta di energia attaccata a Suicune. (Non puoi attaccare una carta energetica dell'acqua dalla tua mano se Suicune non ha carte di energia collegate.)",
            pt: "Sempre que você conectar um cartão de energia da água da sua mão ao Suicune, descarte um cartão de energia preso ao Suicune. (Você não pode anexar um cartão de energia da água da sua mão se o Suicune não tiver cartões de energia.)",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Hypno Wave",
            ja: "催眠波",
            fr: "Hypno Wave",
            de: "Hypno -Welle",
            es: "Ola de hipno",
            it: "Wave Hypno",
            pt: "Onda hypno",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は30のダメージを与え、防御ポケモンは眠っています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires. Si Tails, cette attaque fait 30 dégâts et le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 30 Schaden und das verteidigende Pokémon schläft jetzt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño. Si Tails, este ataque hace 30 daños y el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più. Se le code, questo attacco infligge 30 danni e il Pokemon in difesa è ormai addormentato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos. Se as caudas, esse ataque causam 30 danos e o pokemon atual está agora dormindo.",
          },
        },
      ],

      retreat: 1,

};
