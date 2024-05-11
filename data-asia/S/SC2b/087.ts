import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨金怪"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "用４隻爪子和龐大的身體牢牢地按住獵物後，用腹部的牙齒嚼食。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "飄浮磁場"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "足震"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
