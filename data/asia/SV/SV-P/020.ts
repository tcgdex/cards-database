import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジニア",
		'zh-tw': "墓揚犬",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587777,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
