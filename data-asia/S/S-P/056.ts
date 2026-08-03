import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ビート",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の手札から基本エネルギーを1枚選び、ベンチポケモンにつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597275,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
