import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクロマの実験",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から5枚見て、その中からカードを3枚選び、手札に加える。残りのカードはロストゾーンに置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668239,
				tcgplayer: 570052,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
