import { Card } from "models/database/card";
import Set from "../SM4p";

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
				cardmarket: 560134,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
