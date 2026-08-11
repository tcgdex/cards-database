import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "駒刀小兵"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "揮舞銳利的刀刃將敵人逼向絕境。會用河灘的 石頭來精心保養刀刃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 30,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card