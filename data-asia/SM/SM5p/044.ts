import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルトラ調査隊",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の手札にある「ウルトラビースト」を2枚までトラッシュし、その枚数x3枚、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559794,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
