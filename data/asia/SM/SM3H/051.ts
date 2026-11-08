import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラナキラマウンテン",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのたねポケモン全員のにげるためのエネルギーは、それぞれ1個ぶん多くなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561115,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
