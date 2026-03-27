import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "バブル水エネルギー",
	},

	illustrator: "Ryo Ueda",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "水エネルギー1個分として使えるほか、このエネルギーをつけているポケモンが攻撃で相手のバトルポケモンにダメージを与えたとき、コインを1回投げ、オモテなら、そのポケモンをねむりにする。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
