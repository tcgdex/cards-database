import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーリターン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを2枚選び、手札に加える。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
