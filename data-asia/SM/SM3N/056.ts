import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "グズマ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。",
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
