import { Card } from "models/database/card";
import Set from "../SM8";

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
			type: "normal",
			thirdParty: {
				cardmarket: 558723,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
