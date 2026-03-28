import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "夜のタンカ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
