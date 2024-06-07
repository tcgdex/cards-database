import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "克雷色利亞"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說只要拿著克雷色利亞 的羽毛入睡，就能作個美夢。 被稱為新月的化身。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "月下反轉"
		},

		effect: {
			'zh-tw': "選擇自己的所有寶可夢身上放置的傷害指示物各2個，改放於對手的1隻寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "月光爆破"
		},

		damage: 110,
		cost: ["Psychic", "Psychic", "Colorless"]
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
	regulationMark: "F"
}

export default card