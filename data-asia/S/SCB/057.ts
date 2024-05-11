import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "跳跳豬"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "用尾巴跳來跳去，藉此讓自己的心臟搏動。會把珍珠貝產出的珍珠戴在頭上。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "力量寶石"
		},

		damage: 30,
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
	regulationMark: "E"
}

export default card