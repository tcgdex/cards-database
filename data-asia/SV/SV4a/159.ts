import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネストボール"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746541,
				tcgplayer: 567560,
				cardtrader: 269775,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577390,
			},
		},
	]
}

export default card
