import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷你芙"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "會從頭上的果實噴出油 來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "營養素"
		},

		effect: {
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "噴汁"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card