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
		ja: "おたがいの場のポケモン全員の特性は、すべてなくなる。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
