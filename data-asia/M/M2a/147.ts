import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーリサイクル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを5枚まで選び、相手に見せて、山札にもどして切る。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
