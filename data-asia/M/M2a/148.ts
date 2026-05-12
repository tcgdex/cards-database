import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "改造ハンマー",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている特殊エネルギーを1個選び、トラッシュする。\nグッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
