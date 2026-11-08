import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ククイ博士",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561736,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
