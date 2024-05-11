import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "席多藍恩"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "體內流著如熔岩般滾燙的血液。棲息在火山的洞穴裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "激狂閃焰"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
