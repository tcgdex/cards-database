import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グズマ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561056,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
