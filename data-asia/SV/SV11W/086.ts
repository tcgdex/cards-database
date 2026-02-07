import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "イグニッションエネルギー",
	},
	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。 このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 進化ポケモンについているなら、エネルギー3個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	regulationMark: "I",
	rarity: "Uncommon",
	thirdParty: {
		cardmarket: 829089,
		tcgplayer: 636639,
	},
};

export default card;
