import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "せせらぎの丘",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札にある[水]または[闘]タイプのたねポケモンを1枚、ベンチに出してよい。その場合、山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559373,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
