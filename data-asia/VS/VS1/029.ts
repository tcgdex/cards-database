import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Jasmine's Electabuzz",
         ja: "ジャスミンのエレクトアバズ",
         fr: "Electabuzz de Jasmine",
         de: "Jasmine's Electabuzz",
         es: "El electabuzz de Jasmine",
         it: "Electabuzz di Jasmine",
         pt: "Electabuzz de Jasmine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [125],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Thunder Jolt",
            ja: "サンダージョルト",
            fr: "Secousse du tonnerre",
            de: "Donnerstumpf",
            es: "Trueno",
            it: "Thunder Jolt",
            pt: "Trovão",
          },
          effect: {
            en: "Flip a coin. If tails, Jasmine's Electabuzz does 10 damage to itself.",
            ja: "コインをひっくり返します。テールの場合、ジャスミンのエレクトアバズはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Electabuzz de Jasmine se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht Jasmine Electabuzz 10 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, el electabuzz de Jasmine hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, l'elettabuzz di Jasmine fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se a cauda, electabuzz de Jasmine causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
