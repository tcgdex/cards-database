import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "まけんきハチマキ",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587859,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
