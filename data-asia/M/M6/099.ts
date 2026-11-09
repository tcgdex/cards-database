import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "とくちゅうチョッキ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「メガシンカex」をのぞく）が、相手の「メガシンカex」から受けるワザのダメージは「-60」される。",
	},

	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900132,
				tcgplayer: 709252,
				cardtrader: 403182,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Ultra Rare",
};

export default card;
