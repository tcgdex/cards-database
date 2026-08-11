import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ククイ博士",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561743,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
