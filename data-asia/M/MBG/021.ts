import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエの決心"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。自分のサイドの残り枚数が6枚なら、引く枚数は8枚になる。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846838,
				tcgplayer: 660137,
				cardtrader: 345829,
			},
		},
	]
}

export default card
