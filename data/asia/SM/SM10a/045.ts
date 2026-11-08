import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タッグスイッチ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のTAG TEAMのポケモン1匹についているエネルギーを2個まで、自分の別のポケモン1匹につけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557324,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
