import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "おとりよせパッド",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分の山札にあるグッズを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559866,
			},
		},
	],

	trainerType: "Item",
	rarity: "Common",
};

export default card;
