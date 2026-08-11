import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポータウン",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーが、それぞれ手札からポケモンを出して進化させるたび、そのポケモンにダメカンを3個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561051,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
