import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "メガシグナル"
	},

	illustrator: "inose yukie",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「メガシンカex」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846832,
				tcgplayer: 660131,
				cardtrader: 345823,
			},
		},
	]
}

export default card
