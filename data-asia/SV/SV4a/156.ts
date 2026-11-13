import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキジェネレーター"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中から「基本{L}エネルギー」を2枚まで選び、ベンチの{L}ポケモンに好きなようにつける。残りのカードは山札にもどして切る。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746538,
				tcgplayer: 567557,
				cardtrader: 269779,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577387,
			},
		},
	]
}

export default card
