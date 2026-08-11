import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラの一発勝負",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分の場の[炎]ポケモンの数x2枚ぶん、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559364,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare",
};

export default card;
