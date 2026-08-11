import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カヒリ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、コインを1回投げオモテなら、この「カヒリ」はトラッシュせずに、手札にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558953,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
