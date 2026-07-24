import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "カキ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。自分の山札にある[炎]エネルギーを4枚まで、自分のポケモン1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557452,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
