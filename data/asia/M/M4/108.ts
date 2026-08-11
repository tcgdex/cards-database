import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "AZの安らぎ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。「ポケモンex」をベンチに入れ替えた場合、そのポケモンのHPを「80」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877361,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
