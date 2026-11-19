import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ズガイドス",
		'zh-tw': "頭蓋龍"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [408],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		ja: "なぞの化石"
	},

	description: {
		ja: "硬い 頭蓋骨が 特徴。 頭突きで 樹木を へし折って 実った きのみを 食っていた。",
		'zh-tw': "特徵是堅硬的頭蓋骨。 會用頭錘撞斷樹木， 吃樹上長的樹果。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ストーンエッジ",
			'zh-tw': "尖石攻擊"
		},

		effect: {
			ja: "コインを1回投げオモテなら、40ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。"
		},

		damage: "40+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651003,
				tcgplayer: 569790,
				cardtrader: 234101,
			},
		},
	]
}

export default card