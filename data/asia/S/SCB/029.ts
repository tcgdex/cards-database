import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水箭龜VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "絢麗墜落"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張【水】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。"
		},

		damage: 120,
		cost: ["Water", "Water", "Water"]
	}, {
		name: {
			'zh-tw': "超極巨轟天裂水"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 220,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card