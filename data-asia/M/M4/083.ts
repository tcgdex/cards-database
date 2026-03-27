import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マグネット鋼エネルギー",
	},

	illustrator: "Ryo Ueda",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "鋼エネルギー1個分として使えるほか、このエネルギーをつけているポケモンが受けるワザのダメージは「20」少なくなる。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
