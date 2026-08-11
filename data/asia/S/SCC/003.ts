import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會在森林中四處尋找甜甜蜜。雖然以擁有一身怪力為傲，但卻不是很擅長飛行。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "角撞"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "一力上投"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則增加160點傷害。"
		},

		damage: "40+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card