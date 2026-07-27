import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "おいわいファンファーレ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。その場合、自分の番は終わる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 841214,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
