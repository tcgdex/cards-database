import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオハ",
		'zh-tw': "新葉喵"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	dexId: [906],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
		'zh-tw': "毛茸茸的體毛有著近似於植物的成分。 會勤快地洗臉以防止乾燥。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひざしをあつめる",
			'zh-tw': "集光"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "タネばくだん",
			'zh-tw': "種子炸彈"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card