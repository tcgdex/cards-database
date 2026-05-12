import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "イグニッションエネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。 このカードは、ポケモンについているかぎり、「Colorless」エネルギー1個ぶんとしてはたらく。 進化ポケモンについているなら、「Colorless」エネルギー3個ぶんとしてはたらく。",
	},

	variants: [{"type": "holo"}],

	rarity: "Uncommon",
	regulationMark: "I",
};

export default card;
