import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "喰いつくされた原野",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいの[悪]または[竜]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559371,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
