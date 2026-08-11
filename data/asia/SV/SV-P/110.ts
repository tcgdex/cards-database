import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "おいわいファンファーレ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。その場合、自分の番は終わる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724964,
				tcgplayer: 587860,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
