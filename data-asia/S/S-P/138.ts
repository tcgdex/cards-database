import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ビート",
		'zh-tw': "皮卡丘",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		ja: "自分の手札から基本エネルギーを1枚選び、ベンチポケモンにつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597337,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
