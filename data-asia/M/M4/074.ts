import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "へんかのしょ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "自分のバトルポケモンについているどうぐを1枚選んでトラッシュする。その後、自分の山札からどうぐを1枚選び、そのポケモンにつける。そして山札を切る。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
