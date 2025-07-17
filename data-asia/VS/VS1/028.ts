import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Jasmine's Magneton",
         ja: "ジャスミンのマグネトン",
         fr: "Magneton de Jasmine",
         de: "Jasmines Magneton",
         es: "Magneton de Jasmine",
         it: "Jasmine's Magneton",
         pt: "Jasmine's Magneton",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [82],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Sonic Boom",
            ja: "ソニックブーム",
            fr: "Flèche sonore",
            de: "Überschallknall",
            es: "Boom sónico",
            it: "Sonic Boom",
            pt: "Sonic Boom",
          },
          effect: {
            en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
          damage: 30,
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
