import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰伊布VSTAR"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "冰柱射擊"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 180,
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]水晶星星"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: 220,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card