import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "逆境グローブ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンの弱点のタイプと、相手のバトルポケモンのタイプが同じなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463139,
				tcgplayer: 597265,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
