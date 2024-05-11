import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強顎雞母蟲"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "帶電"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【雷】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "偷襲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card