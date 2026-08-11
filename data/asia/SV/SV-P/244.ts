import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "なかよしポフィン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838358,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
