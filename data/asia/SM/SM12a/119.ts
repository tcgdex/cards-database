import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレキパワー",
	},

	illustrator: "OOYAMA",
	category: "Trainer",

	effect: {
		'ja-jp': "この番、自分の[雷]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544231,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "None",
};

export default card;
