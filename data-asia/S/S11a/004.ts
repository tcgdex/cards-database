import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙籠"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會纏繞在生長於潮濕地帶的樹木上，以散發甜甜香氣的唾液吸引獵物靠近，再一口吃掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "潰爛唾液"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【灼傷】。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "束縛"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card