import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "緊急ボード",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752845,
				tcgplayer: 568398,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
