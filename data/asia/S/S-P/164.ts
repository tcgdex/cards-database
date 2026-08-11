import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミツバ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチの「ポケモンV」の数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597362,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
