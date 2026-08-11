import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネモ",
		'zh-tw': "沙基拉斯",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 695789,
				tcgplayer: 587804,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
