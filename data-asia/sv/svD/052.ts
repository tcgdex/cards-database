import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄飄球"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說有些因為誤認成氣球，而把牠拿在手上的小孩， 會就此消失無蹤。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "氣球爆破"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card