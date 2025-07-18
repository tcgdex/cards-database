import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite ex",
         ja: "ドラゴナイトex",
         fr: "Dragonite ex",
         de: "Dragonit ex",
         es: "Dragonita ex",
         it: "Dragonite Ex",
         pt: "Dragonite Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 150,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Call for Power",
            ja: "権力を呼びます",
            fr: "Appeler à la puissance",
            de: "Strom fordern",
            es: "Llama para poder",
            it: "Chiama il potere",
            pt: "Chamar energia",
          },
          effect: {
            en: "As often as you like during your turn, you may move an Energy card attached to 1 of your PokÃ©mon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
            ja: "ターン中に好きなように、ポカンの1つに取り付けられたエネルギーカードをドラゴナイトexに移動することができます。ドラゴナイトEXが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez à votre tour, vous pouvez déplacer une carte d'énergie attachée à 1 de votre poké mon à Dragonite Ex. Cette puissance ne peut pas être utilisée si Dragonite Ex est affecté par une condition spéciale.",
            de: "So oft Sie während Ihres Kurses mögen, können Sie eine Energiekarte an 1 Ihres Poké Mons an Dragonite EX verschieben. Diese Leistung kann nicht verwendet werden, wenn Dragonit EX von einem besonderen Zustand betroffen ist.",
            es: "Tan a menudo como desee durante su turno, puede mover una tarjeta de energía unida a 1 de su Poké Mon a Dragonite Ex. Esta potencia no se puede usar si Dragonite EX se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno, puoi spostare una carta di energia collegata a 1 del tuo poké al Dragonite Ex. Questa potenza non può essere utilizzata se Dragonite Ex è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno, você pode mover um cartão de energia conectado a 1 do seu Poké Mon para Dragonite Ex. Esse poder não pode ser usado se o Dragonite EX for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Lightning"],
          name: {
            en: "Dragon Wave",
            ja: "ドラゴンウェーブ",
            fr: "Vague de dragon",
            de: "Drachenwelle",
            es: "Ola de dragón",
            it: "Drago Wave",
            pt: "Onda de dragão",
          },
          effect: {
            en: "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
            ja: "Dragonite Exに取り付けられた水エネルギーカードと稲妻エネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie de l'eau et une carte d'énergie Lightning attachée à Dragonite Ex.",
            de: "Eine Wasserergiekarte und eine Blitzergiekarte, die an Dragonit EX angebracht ist, entsorgen.",
            es: "Deseche una tarjeta de energía de agua y una tarjeta de energía relámpago unida a Dragonite Ex.",
            it: "Scartare una carta energetica idrica e una carta di energia fulmini attaccata a Dragonite Ex.",
            pt: "Descarte um cartão de energia da água e um cartão de energia relâmpago ligado ao Dragonite Ex.",
          },
          damage: 70,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Giant Tail",
            ja: "巨大な尾",
            fr: "Queue géante",
            de: "Riesenschwanz",
            es: "Cola gigante",
            it: "Coda gigante",
            pt: "Tail gigante",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 120,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
