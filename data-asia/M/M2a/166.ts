import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブレイブバングル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。 ポケモンのどうぐは、自分の番に何枚でも、自分のポケモンにつけられる。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Pokemon Tool",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
