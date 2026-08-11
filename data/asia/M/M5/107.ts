import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブレイブバングル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888652,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
