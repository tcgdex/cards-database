import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨牙鯊"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會將吞下的海水從臀部的孔中噴出，藉此來游動。對血的氣味非常敏感。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挑釁"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "噴射啃咬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card