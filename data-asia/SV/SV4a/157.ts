import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "スーパーエネルギー回収"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分のトラッシュから基本エネルギーを4枚まで選び、相手に見せて、手札に加える。（このカードの効果でトラッシュしたエネルギーは選べない。）"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746539,
				tcgplayer: 567558,
				cardtrader: 269777,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577388,
			},
		},
	]
}

export default card
