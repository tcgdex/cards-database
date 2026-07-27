import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フラダリラボ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいの場にある「ポケモンのどうぐ」の効果は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559637,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
