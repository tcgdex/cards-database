import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "AZのやすらぎ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		ja: "自分のポケモンを1匹選ぶ。そのポケモンについているカードをすべて手札に加える。その後、そのポケモンを手札に加える。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
