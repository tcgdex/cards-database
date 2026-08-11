import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのおもてなし",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札がこのカードをふくめて6枚以上なら使えない。相手の場のポケモンの数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558454,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Rare",
};

export default card;
