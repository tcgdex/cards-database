import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "アンズ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から4枚見て、その中にあるカードを2枚、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558236,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
