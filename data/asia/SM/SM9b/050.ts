import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "無人発電所",
	},

	illustrator: "aky CG Works",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の「ポケモンGX・EX」の特性は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558168,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
