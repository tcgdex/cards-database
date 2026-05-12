import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団の監視塔",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の「Colorless」ポケモン全員の特性は、すべてなくなる。\nスタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
