import { Card } from "../../../interfaces";
import Set from "../SM4p";

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
				cardmarket: 560143,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
