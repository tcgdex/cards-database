import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルターボエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー2個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651351,
				tcgplayer: 569931,
			},
		},
	],

	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
