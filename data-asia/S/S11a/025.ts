import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼吼鯨"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。每天要吃１噸弱丁魚。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小憩"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水槍"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card