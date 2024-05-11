import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "席多藍恩"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "體內流著如熔岩般滾燙的血液。棲息在火山的洞穴裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "防守利爪"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "熨燙錘"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card