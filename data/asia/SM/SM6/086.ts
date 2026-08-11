import { Card } from "models/database/card";
import Set from "../SM6";

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
			type: "holo",
			thirdParty: {
				cardmarket: 559631,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare",
};

export default card;
