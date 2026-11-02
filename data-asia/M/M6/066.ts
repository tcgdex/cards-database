import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "メガレックウザキャップ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
	},

	attacks: [
		{
			name: { ja: "デルタギフト" },
			cost: ["Colorless"],
			effect: {
				ja: "「メガレックウザキャップ」がついている自分のポケモン全員に、山札から基本エネルギーを1枚ずつつける。そして山札を切る。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900003,
				tcgplayer: 709219,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
