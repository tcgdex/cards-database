import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハロンタウン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの「ホップのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861429,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
