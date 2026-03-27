import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "おおきなつりあみ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "相手のベンチのポケモンを1匹選ぶ。そのポケモンと、ついているカードをすべて相手の手札に戻す。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
