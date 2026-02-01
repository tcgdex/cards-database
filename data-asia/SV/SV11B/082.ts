import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ふうせん",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが2個ぶん少なくなる。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828634,
		tcgplayer: 636436,
	},
};

export default card;
