import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "こだわりハチマキ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンGX・EX」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561334,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
