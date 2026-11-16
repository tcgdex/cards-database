import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "大口の沼",
		'zh-tw': "大嘴沼澤"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札からたねポケモンをベンチに出すたび、そのポケモンにダメカンを2個のせる。",
		'zh-tw': "雙方玩家每次從手牌將【基礎】寶可夢放置於備戰區時，在那隻寶可夢身上放置2個傷害指示物。"
	},

	trainerType: "Stadium",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651035,
				tcgplayer: 569822,
				cardtrader: 234205,
			},
		},
	]
}

export default card