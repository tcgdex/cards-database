import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナタネの活気"
	},

	illustrator: "En Morikura",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、自分の手札から{G}エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651326,
				tcgplayer: 569839,
				cardtrader: 234226,
			},
		},
	]
}

export default card
