import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwrath",
         ja: "Poliwrath",
         fr: "Poliwrath",
         de: "Poliwrath",
         es: "Poliwrath",
         it: "Poliwrath",
         pt: "Poliwrath",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Corkscrew Punch",
            ja: "コークスクリューパンチ",
            fr: "Punch à tire-bouchon",
            de: "Korkenzieher Punch",
            es: "Chaleco",
            it: "Cuocco di cavatappi",
            pt: "Punch de saca -rolhas",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Submission",
            ja: "提出",
            fr: "Soumission",
            de: "Vorlage",
            es: "Envío",
            it: "Sottomissione",
            pt: "Submissão",
          },
          effect: {
            en: "Poliwrath does 20 damage to itself.",
            ja: "Poliwrathはそれ自体に20のダメージを与えます。",
            fr: "Poliwrath fait 20 dégâts à lui-même.",
            de: "Poliwrath schädigt sich 20.",
            es: "Poliwrath hace 20 daños a sí mismo.",
            it: "Poliwrath fa 20 danni a se stesso.",
            pt: "Poliwrath causa 20 danos a si mesmo.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
