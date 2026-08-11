import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒガナ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分の手札にある基本エネルギーを2枚まで、自分の[竜]ポケモン1匹につける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559366,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
