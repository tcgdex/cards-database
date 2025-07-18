import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Surprise Attack",
            ja: "奇襲",
            fr: "Attaque surprise",
            de: "Überraschungsangriff",
            es: "Ataque sorpresa",
            it: "Attacco a sorpresa",
            pt: "Ataque surpresa",
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
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Ascension",
            ja: "上昇",
            fr: "Ascension",
            de: "Aufstieg",
            es: "Ascensión",
            it: "Ascensione",
            pt: "Ascensão",
          },
          effect: {
            en: "Search your deck for a card that evolves from Magikarp and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
            ja: "Magikarpから進化するカードをデッキで検索し、Magikarpに置いてください。 （これは進化するMagikarpとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue de Magikarp et mettez-la sur Magikarp. (Cela compte comme évolutif Magikarp.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von Magikarp entwickelt, und setzen Sie sie auf Magikarp. (Dies gilt als weiterentwickelnde Magikarp.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Magikarp y póngala en Magikarp. (Esto cuenta como en evolución de Magikarp.) Arriba tu mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Magikarp e mettila su Magikarp. (Questo conta come Magikarp.) In seguito mescola il tuo mazzo.",
            pt: "Pesquise seu baralho por uma carta que evolui do Magikarp e coloque -a no Magikarp. (Isso conta como Magikarp em evolução.) Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
