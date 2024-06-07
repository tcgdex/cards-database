import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 烈焰馬"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "會從角發射強力的精神利刃。那超群的破壞力甚至可以在厚厚的鐵板上開出洞來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "粉彩護幕"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢不會陷入特殊狀態，並將受到的特殊狀態全部恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
