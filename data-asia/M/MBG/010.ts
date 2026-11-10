import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "なかよしポフィン"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846827,
				tcgplayer: 660127,
				cardtrader: 345818,
			},
		},
	]
}

export default card
