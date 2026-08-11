import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シトロンの機転",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の[L]ポケモン全員のHPを、それぞれ「60」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864012,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
