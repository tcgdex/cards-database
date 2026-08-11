import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "スイレンのお世話"
	},

	illustrator: "Toshinao Aoki",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）と基本エネルギーを合計3枚まで選び、相手に見せて、手札に加える。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761553,
				tcgplayer: 566148,
			},
		},
	],

	trainerType: "Supporter"
}

export default card