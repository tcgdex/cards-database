import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギー転送",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から基本エネルギーを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838366,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
