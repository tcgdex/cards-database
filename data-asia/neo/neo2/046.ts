import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Sentret",
         ja: "セントレット",
         fr: "Déménager",
         de: "Sentret",
         es: "Pilón",
         it: "Sentert",
         pt: "Sentret",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [161],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scout",
            ja: "スカウト",
            fr: "Scout",
            de: "Erkunden",
            es: "Explorar",
            it: "Scout",
            pt: "Scout",
          },
          effect: {
            en: "Look at your opponent's hand.",
            ja: "相手の手を見てください。",
            fr: "Regardez la main de votre adversaire.",
            de: "Schauen Sie sich die Hand Ihres Gegners an.",
            es: "Mira la mano de tu oponente.",
            it: "Guarda la mano del tuo avversario.",
            pt: "Olhe para a mão do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
