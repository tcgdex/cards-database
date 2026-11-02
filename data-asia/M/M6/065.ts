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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900002,
				tcgplayer: 709218,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
