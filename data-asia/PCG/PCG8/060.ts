import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Nuzleaf",
         ja: "ヌズリーフ",
         fr: "Nuzleaf",
         de: "Nuzleaf",
         es: "Nuzleaf",
         it: "Nuzleaf",
         pt: "Nuzleaf",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [274],
      hp: 80,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Self Charge",
            ja: "自己充電",
            fr: "Auto-charge",
            de: "Selbstladung",
            es: "Autodescrito",
            it: "Auto -carica",
            pt: "Auto -carga",
          },
          effect: {
            en: "Attach a Darkness Energy card from your hand to Nuzleaf.",
            ja: "あなたの手からヌズリーフに暗闇のエネルギーカードを取り付けます。",
            fr: "Fixez une carte d'obscurité de votre main à Nuzleaf.",
            de: "Befestigen Sie eine Dunkelheitsenergiekarte von Ihrer Hand an Nuzleaf.",
            es: "Adjunte una tarjeta de energía de oscuridad de su mano a Nuzleaf.",
            it: "Attacca una scheda energetica oscura dalla mano a Nuzleaf.",
            pt: "Anexe um cartão de energia da escuridão da sua mão a Nuzleaf.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Corkscrew Punch",
            ja: "コークスクリューパンチ",
            fr: "Punch à tire-bouchon",
            de: "Korkenzieher Punch",
            es: "Chaleco",
            it: "Cuocco di cavatappi",
            pt: "Punch de saca -rolhas",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
