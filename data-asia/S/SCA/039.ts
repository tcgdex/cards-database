import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡地V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "意念之匙"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "意志統治者"
		},

		effect: {
			'zh-tw': "造成對手的手牌的張數×30點傷害。"
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
	regulationMark: "D"
}

export default card