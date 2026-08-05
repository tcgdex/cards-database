import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "きとうし",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		ja: "このカードの持ち主と、自分のポケモン全員にかかっているワザの効果は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557048,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
