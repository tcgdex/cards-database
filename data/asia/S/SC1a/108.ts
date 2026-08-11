import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "駒刀小兵"
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "揮舞銳利的刀刃將敵人逼向絕境。會用河灘的石頭來精心保養刀刃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "切"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 20,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card