import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カシオペア",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773834,
				tcgplayer: 566336,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
