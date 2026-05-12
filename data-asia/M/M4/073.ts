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
		ja: "自分のトラッシュから「Water」ポケモンと「基本「Water」エネルギー」をそれぞれ3枚まで選び、相手に見せて、山札にもどして切る。\nグッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	rarity: "Uncommon",
	regulationMark: "I",
};

export default card;
