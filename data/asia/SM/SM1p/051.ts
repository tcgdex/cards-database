import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "日輪の祭壇",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の[炎]ポケモンと[鋼]ポケモン全員の弱点は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561579,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
