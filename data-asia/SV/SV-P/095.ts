import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "月明かりの丘",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から「基本[P]エネルギー」を1枚トラッシュするなら、自分のポケモン全員のHPを、それぞれ「30」回復してよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723909,
				tcgplayer: 587853,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
