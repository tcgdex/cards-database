import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "イグニッションエネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。進化ポケモンについているなら、エネルギー3個ぶんとしてはたらく。",
	},

	variants: [{"type": "holo"}],

	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850617,
		tcgplayer: 655900,
	},
};

export default card;