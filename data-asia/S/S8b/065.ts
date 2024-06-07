import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詛咒娃娃"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "誕生自遭到捨棄時的怨念。據說只要讓牠感覺自己受到重視， 牠就會滿意地變回原本的玩偶。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "覺悟怨恨"
		},

		effect: {
			'zh-tw': "在這隻寶可夢身上放置最多7個傷害指示物，造成放置的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "不祥之光"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "E"
}

export default card