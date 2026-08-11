import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "睡睡菇"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "頭上的蘑菇傘非常好吃，雖然會被森林中的寶可夢吃掉，但是過了一晚上就會再生。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蘑菇孢子"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "活蹦亂跳"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
