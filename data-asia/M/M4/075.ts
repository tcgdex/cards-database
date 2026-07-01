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

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
