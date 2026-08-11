import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナのパワーウエイト",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「シロナのポケモン」の最大HPは「＋70」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863984,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
