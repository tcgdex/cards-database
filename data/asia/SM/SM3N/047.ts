import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いちゃもんスプレー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札からオモテを見ないで1枚選び、オモテを見る。そのカードがサポートなら、トラッシュする。サポートでないなら、もとの手札にもどす。",
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
