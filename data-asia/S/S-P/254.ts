import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "おいわいファンファーレ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。その場合、自分の番は終わる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 573615,
				tcgplayer: 597427,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
