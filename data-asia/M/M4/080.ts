import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "プリズムタワー",
	},

	illustrator: "Kazuya Fujishima",
	category: "Trainer",
	trainerType: "Stadium",

	effect: {
		ja: "ドラゴンタイプのポケモンのにげるためのエネルギーを、それぞれ1個少なくする。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
