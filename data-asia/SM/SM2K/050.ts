import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "エーテルパラダイス保護区",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいの[草]または[雷]タイプのたねポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561516,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
