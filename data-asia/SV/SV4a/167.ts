import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "たべのこし"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、そのポケモンのHPを「20」回復する。"
	},

	trainerType: "Tool",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746549,
				tcgplayer: 567568,
				cardtrader: 269770,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577398,
			},
		},
	]
}

export default card
