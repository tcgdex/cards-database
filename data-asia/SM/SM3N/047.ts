import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "いちゃもんスプレー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "相手の手札からオモテを見ないで1枚選び、オモテを見る。そのカードがサポートなら、トラッシュする。サポートでないなら、もとの手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561047,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
