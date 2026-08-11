import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケバイタルA",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン1匹のHPを「150」回復する。このカードは、トラッシュにあるかぎり、手札に加えられず、山札にもどせない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863963,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
