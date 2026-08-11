import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 大蔥鴨"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "在不斷活用又粗又長的 伽勒爾大蔥的過程中， 大蔥鴨演化成了獨特的樣子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "貫徹"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card