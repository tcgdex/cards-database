import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レガシーエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。 このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。対戦中、自分の「レガシーエネルギー」のこの効果は、1回しかはたらかない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864043,
			},
		},
	],

	regulationMark: "H",
	rarity: "None",
};

export default card;
