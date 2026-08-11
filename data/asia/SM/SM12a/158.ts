import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチア",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある♢（プリズムスター）のカードを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544426,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "None",
};

export default card;
