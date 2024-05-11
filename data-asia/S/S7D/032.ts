import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "性情謹慎且狡猾。在偷盜食物逃走的時候會用尾巴擦掉自己的足跡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擺尾拍擊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card