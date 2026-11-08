import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "喰いつくされた原野",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの[悪]または[竜]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560296,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
