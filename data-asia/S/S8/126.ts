import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "トレーニングコート",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加えてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576204,
				tcgplayer: 569627,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "D",
	rarity: "Secret Rare",
};

export default card;
