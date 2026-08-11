import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マオ&スイレン",
	},

	illustrator: "aoki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、ベンチに入れ替えたポケモンのHPを「120」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 608122,
				tcgplayer: 597429,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
