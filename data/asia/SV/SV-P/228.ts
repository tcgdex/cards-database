import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ちからのハチマキ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804758,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Promo",
};

export default card;
