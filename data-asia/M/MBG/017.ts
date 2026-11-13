import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "パンクメット"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている{D}ポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを4個のせる。"
	},

	trainerType: "Tool",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846834,
				tcgplayer: 660133,
				cardtrader: 345825,
			},
		},
	]
}

export default card
