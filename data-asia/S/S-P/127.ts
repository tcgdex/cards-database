import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "プレイヤーズセレモニー",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札を2枚引いてよい。その場合、自分の番は終わる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525320,
				tcgplayer: 597328,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
