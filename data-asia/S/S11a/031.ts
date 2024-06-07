import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝胡地"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有非常高的智商。據說牠能記住從出生到死一輩子發生過的所有事情。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "傷痛湯匙"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇最多2個對手的1隻場上寶可夢身上放置的傷害指示物，改放於對手的另1隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "意志統治者"
		},

		effect: {
			'zh-tw': "造成對手的手牌的張數×20點傷害。"
		},

		damage: "20×",
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

	retreat: 2,
	regulationMark: "F"
}

export default card