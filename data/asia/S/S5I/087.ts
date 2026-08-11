import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フヨウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		'ja-jp': "この番、自分の「ポケモンVMAX」が使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538638,
				tcgplayer: 569036,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
