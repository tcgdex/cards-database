import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ネモ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
