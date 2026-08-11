import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "こだわりハチマキ",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンGX・EX」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558469,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
