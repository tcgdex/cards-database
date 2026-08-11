import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムキムキパッド",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているにげるためのエネルギーが4個のポケモンの最大HPは「50」大きくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558451,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
