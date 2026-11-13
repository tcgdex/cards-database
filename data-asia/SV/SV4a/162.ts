import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "はげましのてがみ"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746544,
				tcgplayer: 567563,
				cardtrader: 269753,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577393,
			},
		},
	]
}

export default card
