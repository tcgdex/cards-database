import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮可西ex"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "月表領域"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【超】能量的寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "月亮奇跡"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的【超】能量，以任意方式改附於自己的寶可夢身上。"
		},

		damage: 170,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card