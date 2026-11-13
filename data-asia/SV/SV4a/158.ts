import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "すごいつりざお"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと基本エネルギーを合計3枚まで選び、相手に見せて、山札にもどして切る。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746540,
				tcgplayer: 567559,
				cardtrader: 269776,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577389,
			},
		},
	]
}

export default card
