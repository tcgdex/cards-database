import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球， 走路時不會發出絲毫聲響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card