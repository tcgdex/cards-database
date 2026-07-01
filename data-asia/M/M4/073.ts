import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "大漁ネット",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと「基本エネルギー」をそれぞれ3枚まで選び、相手に見せて、山札にもどして切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
