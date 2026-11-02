import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "とくちゅうチョッキ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「メガシンカex」をのぞく）が、相手の「メガシンカex」から受けるワザのダメージは「-60」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900131,
				tcgplayer: 709251,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
