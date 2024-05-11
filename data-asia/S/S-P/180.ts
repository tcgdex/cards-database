import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役VMAX"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "雙重射擊手"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張【水】能量卡丟棄，則可使用1次。在對手的2隻備戰寶可夢身上，各放置2個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨漩澴盤渦"
		},

		effect: {
			'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，放回手牌。這個情況下，增加70點傷害。"
		},

		damage: "70+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card