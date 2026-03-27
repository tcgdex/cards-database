import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "AZのやすらぎ",
	},

	illustrator: "Naomi Satō",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		ja: "自分のポケモンを1匹選ぶ。そのポケモンについているカードをすべて手札に加える。その後、そのポケモンを手札に加える。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
