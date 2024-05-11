import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨寶寶"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "比起飛行更擅長游泳。一潛入水中就會開心地吃起最愛的水苔。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
