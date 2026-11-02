import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "超ブーストエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードは、2進化ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらき、自分の場に2進化ポケモンが3匹以上いるなら、すべてのタイプのエネルギー4個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559878,
			},
		},
	],

	rarity: "Rare Holo",
};

export default card;
