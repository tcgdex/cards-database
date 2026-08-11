import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "タイサイ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の手札をオモテにして、おたがいに見せ合う。自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651342,
				tcgplayer: 569922,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
