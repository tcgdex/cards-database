import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Grimer",
         ja: "グリマー",
         fr: "Sinistre",
         de: "Schmutz",
         es: "Mueca",
         it: "Grimer",
         pt: "Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Poison Spurt",
            ja: "ポイズンスパート",
            fr: "Poussée de poison",
            de: "Giftschub",
            es: "Espurante de veneno",
            it: "Spiro veleno",
            pt: "Poison Spurt",
          },
          effect: {
            en: "Discard a Grass Energy card attached to Grimer. The Defending Pokemon is now Poisoned.",
            ja: "グリマーに取り付けられた草のエネルギーカードを捨てます。防御ポケモンは現在中毒になっています。",
            fr: "Jeter une carte d'énergie de l'herbe attachée à la grimace. Le Pokémon en défense est maintenant empoisonné.",
            de: "Legen Sie eine Grasergiekarte ab, die an Grimer befestigt ist. Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "Deseche una tarjeta de energía de hierba unida a Grimer. El Pokémon defensor ahora está envenenado.",
            it: "Scartare una carta di energia dell'erba attaccata a Grimer. Il Pokemon in carica è ora avvelenato.",
            pt: "Descarte um cartão de energia da grama anexado ao carrinho. O Pokémon atual agora está envenenado.",
          },
        },
      ],

      retreat: 1,

      variants: [
		{
		  type: "normal",
		  subtype: "unlimited",
		},
		{
		  type: "normal",
		  stamp: ["1st edition"],
		},
      ],
};
