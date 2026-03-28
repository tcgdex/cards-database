import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "夜の鉱山",
	},

	illustrator: "Kenichi Yamaguchi",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の「テラスタル」のポケモン全員は、ワザを使うためのエネルギーが、それぞれエネルギー1個ぶん多くなる。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
