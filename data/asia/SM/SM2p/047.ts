import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アセロラ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "ダメカンがのっている自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561306,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
