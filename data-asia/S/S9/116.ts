import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "ハマナのバックアップ"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「ポケモン」と「ポケモンのどうぐ」と「スタジアム」と「エネルギー」を、それぞれ1枚まで選び、相手に見せて、山札にもどして切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606281,
				tcgplayer: 569744,
			},
		},
	],

	trainerType: "Supporter"
}

export default card