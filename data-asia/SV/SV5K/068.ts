import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ビワ",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からグッズを2枚まで選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752849,
				tcgplayer: 568402,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
