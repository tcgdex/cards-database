import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハマナのバックアップ",
	},

	illustrator: "Nagomi Nijo",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「ポケモン」と「ポケモンのどうぐ」と「スタジアム」と「エネルギー」を、それぞれ1枚まで選び、相手に見せて、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 654761,
				tcgplayer: 597458,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
