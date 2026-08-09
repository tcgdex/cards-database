import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ソッドとシルディ",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加えて良いかを相手にたずねる。相手が良いなら、選んだカードを手札に加える。良くないなら、選んだカードをトラッシュにもどし、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587061,
				tcgplayer: 571515,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
