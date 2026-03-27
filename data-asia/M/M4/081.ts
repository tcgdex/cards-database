import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ニトロ炎エネルギー",
	},

	illustrator: "Ryo Ueda",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "炎エネルギー1個分として使えるほか、このエネルギーをつけているポケモンが使うワザのダメージは「30」多くなる。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
