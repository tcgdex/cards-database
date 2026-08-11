import { Card } from "models/database/card";
import Set from "../SV6";

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
			type: "holo",
			thirdParty: {
				cardmarket: 767567,
				tcgplayer: 568123,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
};

export default card;
