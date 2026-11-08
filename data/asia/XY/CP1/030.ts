import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団のしたっぱ",
	},

	illustrator: "GAME FREAK inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を1枚選び、トラッシュする。その後、自分の山札を3枚引く。トラッシュしたカードが「マグマ団」のポケモンなら、さらに1枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563750,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
