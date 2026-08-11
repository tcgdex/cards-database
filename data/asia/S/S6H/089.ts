import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドクター",
	},

	illustrator: "Sonosuke Skauma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。相手のバトルポケモンが「ポケモンVMAX」なら、さらに2枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560965,
				tcgplayer: 569221,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
