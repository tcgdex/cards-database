import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超音蝠"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "會利用從口中發出的超音波 探查周圍的狀況。在狹窄的 洞窟裡也能靈巧地飛來飛去。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引路"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗之牙"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card