import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリナ",
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから[水]ポケモンと[水]エネルギーを合計4枚まで選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587075,
				tcgplayer: 571528,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
