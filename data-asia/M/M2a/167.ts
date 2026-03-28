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
		ja: "このカードをつけている「ホップのポケモン」は、ワザを使うためのエネルギーがエネルギー1個ぶん少なくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。 ポケモンのどうぐは、自分の番に何枚でも、自分のポケモンにつけられる。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Pokemon Tool",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
