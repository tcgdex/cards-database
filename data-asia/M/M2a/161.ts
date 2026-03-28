import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カウンターゲイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンがワザを使うためのエネルギーは、エネルギー1個ぶん少なくなる。 ポケモンのどうぐは、自分の番に何枚でも、自分のポケモンにつけられる。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Pokemon Tool",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
