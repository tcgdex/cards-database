import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンいれかえ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 751824,
				tcgplayer: 587876,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
