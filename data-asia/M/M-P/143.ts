import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デウロ",
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の「メガシンカex」がきぜつしていなければ使えない。自分の山札から基本エネルギーを2枚まで選び、自分の「メガシンカex」1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 897862,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Promo",
};

export default card;
