import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Flaaffy",
         ja: "フラフィー",
         fr: "Flaaffy",
         de: "Flaaffy",
         es: "Flafy",
         it: "Flaaffy",
         pt: "Flaaffy",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [180],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Energy Recall",
            ja: "エネルギーリコール",
            fr: "Rappel d'énergie",
            de: "Energieerruf",
            es: "Retiro de energía",
            it: "Richiamo energetico",
            pt: "Recall de energia",
          },
          effect: {
            en: "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
            ja: "廃棄パイルからFlaaffyに最大2つの基本エネルギーカードを取り付けます。",
            fr: "Attachez jusqu'à 2 cartes d'énergie de base de votre tas de défausse à Flaaffy.",
            de: "Befestigen Sie bis zu 2 grundlegende Energiekarten von Ihrem Ablagerungsstapel an Flaaffy.",
            es: "Adjunte hasta 2 tarjetas de energía básicas de su pila de descarte a flaffy.",
            it: "Attacca fino a 2 carte di energia di base dalla pila di scarto a Flaaffy.",
            pt: "Anexe até 2 cartões básicos de energia da sua pilha de descarte a Flaaffy.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Lightning Ball",
            ja: "稲妻",
            fr: "Balle de foudre",
            de: "Blitzball",
            es: "Bola de rayo",
            it: "Sfera di fulmini",
            pt: "Bola Lightning",
          },
          damage: 30,
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
