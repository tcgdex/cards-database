import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ニトロ炎エネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 このカードをつけているポケモンが使うワザの効果で、このカードがトラッシュされたなら、ワザのダメージや効果のあとに、手札にもどす。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Rare",
};

export default card;
