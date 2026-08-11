import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プリズムタワー",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札を2枚トラッシュするなら、自分の山札を1枚引いてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877370,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
