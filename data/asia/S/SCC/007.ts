import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "裙兒小姐"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "因為美麗的模樣而受到其他寶可夢的喜愛。頭上的花如果疏於照料，很快就會腐爛枯萎。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "搖晃鮮花"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【睡眠】。若為反面，則將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card