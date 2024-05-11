import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凱路迪歐V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "飛濺"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "神秘之劍"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×30點傷害。"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
