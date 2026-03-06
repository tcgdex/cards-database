import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "博士の研究",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828653,
		tcgplayer: 636438,
	},
};

export default card;
