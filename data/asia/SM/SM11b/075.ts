import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "無人発電所",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の「ポケモンGX・EX」の特性は、すべてなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555337,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
