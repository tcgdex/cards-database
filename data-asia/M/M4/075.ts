import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "AZの安らぎ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。「ポケモンex」をベンチに入れ替えた場合、そのポケモンのHPを「80」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876974,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
