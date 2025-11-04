import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "チェレン",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
