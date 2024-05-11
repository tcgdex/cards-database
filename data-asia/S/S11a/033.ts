import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "椰蛋樹"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "３顆頭都想著不同的事。對自己以外的事情似乎都沒什麼興趣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "強力風暴"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "踩"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
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