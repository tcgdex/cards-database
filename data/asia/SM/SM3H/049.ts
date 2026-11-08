import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カキ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードを使ったら、自分の番は終わる。自分の山札にある[炎]エネルギーを4枚まで、自分のポケモン1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561113,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
