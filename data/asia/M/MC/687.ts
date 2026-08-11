import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒーローマント",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンの最大HPは「＋100」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863989,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
