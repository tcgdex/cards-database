import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハッコウシティ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから「基本[L]エネルギー」を2枚まで選び、相手に見せて、手札に加えてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861428,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
