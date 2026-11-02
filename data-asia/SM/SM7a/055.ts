import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カヒリ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、コインを1回投げオモテなら、この「カヒリ」はトラッシュせずに、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558943,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Common",
};

export default card;
