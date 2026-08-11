import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「ロケット団のポケモン」にしかつけられず、「ロケット団のポケモン」以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、[P][D]の2つのタイプのエネルギー2個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864044,
			},
		},
	],

	regulationMark: "I",
	rarity: "None",
};

export default card;
