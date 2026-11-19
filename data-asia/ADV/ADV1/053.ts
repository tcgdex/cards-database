import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "おじょうさまのお散歩"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、3種類までの基本エネルギーを、それぞれ1枚ずつ選び出し、相手プレイヤーに見せてから、手札に加える。その後、その山札を切る。"
	},

	trainerType: "Supporter",
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784537,
				tcgplayer: 613088,
				cardtrader: 138037,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784537,
				tcgplayer: 613088,
				cardtrader: 138037,
			},
		},
	]
}

export default card
