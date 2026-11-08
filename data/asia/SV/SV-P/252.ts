import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネモ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
