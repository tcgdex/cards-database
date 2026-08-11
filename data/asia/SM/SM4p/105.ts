import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "グズマ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560138,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
