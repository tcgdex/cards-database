import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "カウンターエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードは、自分のポケモン（「ポケモンGX・EX」をのぞく）についているとき、自分のサイドの残り枚数が相手のサイドの残り枚数より多いなら、すべてのタイプのエネルギー2個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560309,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
