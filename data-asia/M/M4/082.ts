import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "バブル水エネルギー",
	},

	illustrator: "",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 このカードをつけているポケモンは、特殊状態にならず、受けている特殊状態は、すべて回復する。",
	},

	variants: [{"type": "holo"}],

	energyType: "Special",
	regulationMark: "I",
	rarity: "Rare",
};

export default card;
