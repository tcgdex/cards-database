import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドクター",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。相手のバトルポケモンが「ポケモンVMAX」なら、さらに2枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560958,
				tcgplayer: 569213,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
