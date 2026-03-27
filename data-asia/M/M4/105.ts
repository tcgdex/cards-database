import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "でっかいソフトクリーム",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "自分のポケモン1匹のダメージカウンターを8個取り除く。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
