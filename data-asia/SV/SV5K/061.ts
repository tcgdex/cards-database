import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "おとりよせボックス",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。自分の山札からグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752842,
				tcgplayer: 568395,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
