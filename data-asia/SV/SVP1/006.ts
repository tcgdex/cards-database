import { Card } from "../../../interfaces"
import Set from "../SVP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墓仔狗"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "愛親近人，害怕寂寞。 就算只跟牠玩了一下下， 牠也會一直跟在後面。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "墓地遊玩"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的【超】寶可夢的張數×10點傷害。"
		},

		damage: "10×",
		cost: ["Psychic"]
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
	regulationMark: "G"
}

export default card