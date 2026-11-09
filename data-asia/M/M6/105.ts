import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニトロ炎エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、{R}エネルギー1個ぶんとしてはたらく。このカードをつけている{R}ポケモンが使うワザの効果で、このカードがトラッシュされたなら、ワザのダメージや効果のあとに、手札にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900138,
				tcgplayer: 709258,
				cardtrader: 403188,
			},
		},
	],

	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
