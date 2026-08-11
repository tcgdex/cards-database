import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熱帶龍"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "捲土重來"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "日光束"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card