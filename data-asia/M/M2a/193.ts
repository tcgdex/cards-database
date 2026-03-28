import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団エネルギー",
	},

	illustrator: "",
	category: "Energy",

	effect: {
		ja: "このカードは「ロケット団のポケモン」にしかつけられず、「ロケット団のポケモン」以外についているなら、トラッシュする。 このカードは、ポケモンについているかぎり、の2つのタイプのエネルギー2個ぶんとしてはたらく。",
	},

	variants: [{"type": "normal"}],

	energyType: "Special",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
