import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのこだわりハチマキ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ホップのポケモン」は、ワザを使うためのエネルギーが「Colorless」エネルギー1個ぶん少なくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。\nポケモンのどうぐは、自分の番に何枚でも、自分のポケモンにつけられる。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
