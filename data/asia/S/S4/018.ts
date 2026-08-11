import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼吼鯨"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。每天要吃１噸弱丁魚。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card