import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団の秘密基地",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ、手札からたねポケモン（「マグマ団」をのぞく）をベンチに出すたび、そのポケモンにダメカンを2個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563752,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
