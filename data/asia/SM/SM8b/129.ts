import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カルネ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、前の相手の番に、自分の[妖]ポケモンがきぜつしていなければ使えない。自分のトラッシュにある好きなカードを2枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551141,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
