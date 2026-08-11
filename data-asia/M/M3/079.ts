import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "テレパス超エネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。このカードを手札からポケモンにつけたとき、自分の山札からタイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
	},

	variants: [{"type": "holo"}],

	regulationMark: "I",
	rarity: "Rare",

	thirdParty: {
		cardmarket: 868089,
		tcgplayer: 674398,
	},
};

export default card;