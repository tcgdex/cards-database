import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーテルパラダイス保護区",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの[草]または[雷]タイプのたねポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558257,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "A",
	rarity: "Secret Rare",
};

export default card;
