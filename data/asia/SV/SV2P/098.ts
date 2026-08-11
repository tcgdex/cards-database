import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "すごいつりざお"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと基本エネルギーを合計3枚まで選び、相手に見せて、山札にもどして切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707665,
				tcgplayer: 567855,
			},
		},
	],

	trainerType: "Item"
}

export default card