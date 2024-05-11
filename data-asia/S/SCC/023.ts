import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燃燒蟲"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "會用火焰保護自己。過去的人們相信牠的巢在太陽上。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蓄能焰襲"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card