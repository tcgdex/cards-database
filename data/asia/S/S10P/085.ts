import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タイサイ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ、自分の手札をオモテにして、おたがいに見せ合う。自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651348,
				tcgplayer: 569928,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
