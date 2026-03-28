import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "イグニッションエネルギー",
	},

	illustrator: "",
	category: "Energy",

	effect: {
		ja: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。 このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 進化ポケモンについているなら、エネルギー3個ぶんとしてはたらく。",
	},

	variants: [{"type": "normal"}],

	energyType: "Special",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
