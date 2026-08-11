import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "葉隠れポンチョ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "ポケモンのどうぐは、自分のポケモンにつけて使う。ポケモン1匹につき1枚だけつけられ、つけたままにする。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680858,
				tcgplayer: 570182,
			},
		},
	],

	trainerType: "Tool"
}

export default card