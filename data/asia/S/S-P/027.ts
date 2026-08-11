import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビート",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札から基本エネルギーを1枚選び、ベンチポケモンにつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597247,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
