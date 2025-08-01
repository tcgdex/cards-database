import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Azumarill - 025/092",
         ja: "アズマリル-025/092",
         fr: "Azumarill - 025/092",
         de: "Azumarill - 025/092",
         es: "Azumarill - 025/092",
         it: "Azumarill - 025/092",
         pt: "Azumarill - 025/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [184],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Bubble Turn",
            ja: "バブルターン",
            fr: "Virage à bulles",
            de: "Blase drehen",
            es: "Giro de burbujas",
            it: "Turning a bolle",
            pt: "Turno de bolha",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
            ja: "ターン中に（攻撃の前に）</em> </em>、アズマリルがベンチにいる場合、コインをひっくり返すことができます。頭の場合は、Azumarillとそれに取り付けられたすべてのカードをあなたの手に返します。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Azumarill est sur votre banc, vous pouvez retourner une pièce. Si les têtes, retournez Azumarill et toutes les cartes qui y sont attachées à votre main.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Azumarill auf Ihrer Bank ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, geben Sie Azumarill und alle daran an Ihre Hand befestigten Karten zurück.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Azumarill está en su banco, puede voltear una moneda. Si se dirige, regrese Azumarill y todas las tarjetas adjuntas a su mano.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Azumarill è in panchina, puoi capovolgere una moneta. Se la testa, restituisce Azumarill e tutte le carte attaccate alla tua mano.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Azumarill estiver em seu banco, você poderá virar uma moeda. Se as cabeças, retorne Azumarill e todas as cartas anexadas à sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Aqua Sonic",
            ja: "アクアソニック",
            fr: "Aqua sonic",
            de: "Aqua Sonic",
            es: "Aqua Sonic",
            it: "Aqua Sonic",
            pt: "Aqua Sonic",
          },
          effect: {
            en: "Don't apply Resistance.",
            ja: "抵抗を適用しないでください。",
            fr: "N'appliquez pas la résistance.",
            de: "Wenden Sie keinen Widerstand an.",
            es: "No aplique resistencia.",
            it: "Non applicare resistenza.",
            pt: "Não aplique resistência.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

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
