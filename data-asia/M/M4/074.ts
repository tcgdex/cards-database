import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "変化の書",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "「変化の書」は、2枚同時にしか使えない。（効果は、2枚で1回はたらく。） 自分のトラッシュからたねポケモンを1枚選び、自分の場のたねポケモン1匹と入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたポケモンはトラッシュする。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
