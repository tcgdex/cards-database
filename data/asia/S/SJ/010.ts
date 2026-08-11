import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "無極汰那V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "衝力"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【惡】能量卡，附於備戰寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨炮"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card