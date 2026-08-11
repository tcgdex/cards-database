import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "提布莉姆"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "遇到情緒激昂的對手時，無論對方是誰，都會用粗暴的方式使其沉默。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "超念力"
		},

		damage: 40,
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
	regulationMark: "D"
}

export default card