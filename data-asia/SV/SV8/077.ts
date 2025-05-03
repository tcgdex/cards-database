import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アローラ ダグトリオ",
		'zh-tw': "阿羅拉 三地鼠",
		'zh-cn': "阿羅拉 三地鼠"
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [51],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "金属質の 髭は 重いので 素早さは いまいちだが 硬い 岩盤も 掘りぬくパワーを 持つ。",
		'zh-tw': "金屬材質的鬍鬚很重， 所以速度並不快， 但擁有能夠挖穿堅硬岩盤的力量。",
		'zh-cn': "金屬材質的鬍鬚很重， 所以速度並不快， 但擁有能夠挖穿堅硬岩盤的力量。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "スリービンゴ",
			'zh-tw': "三賓果",
			'zh-cn': "三賓果"
		},

		damage: 120,

		effect: {
			ja: "自分の手札が3枚でないなら、このワザは失敗。",
			'zh-tw': "若自己的手牌不是3張，則這個招式失敗。",
			'zh-cn': "若自己的手牌不是3張，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card