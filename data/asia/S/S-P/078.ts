import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤロー",
		'zh-tw': "皮卡丘",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を2枚までトラッシュし、その枚数×2枚、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597289,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
