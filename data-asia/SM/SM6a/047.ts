import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カキ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。自分の山札にある[炎]エネルギーを4枚まで、自分のポケモン1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559362,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
