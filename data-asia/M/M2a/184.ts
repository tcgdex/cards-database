import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼロの大空洞",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "自分の場に「テラスタル」のポケモンがいるプレイヤーが、ベンチに出せるポケモンの数は8匹になる。 （このカードがトラッシュされたときか、自分の場に「テラスタル」のポケモンがいなくなったとき、ベンチが5匹になるまでトラッシュする。おたがいにトラッシュするなら、このカードの持ち主から行う。） スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
