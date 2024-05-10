import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛崖蟹"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "夾住"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			'zh-tw': "腎上腺錘"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【混亂】。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card