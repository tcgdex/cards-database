import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーコイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、すべてオモテなら、自分の山札から基本エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828626,
		tcgplayer: 636433,
	},
};

export default card;
