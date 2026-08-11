import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "炎の結晶",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにある[炎]エネルギーを3枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544301,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "None",
};

export default card;
