import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "隨風球"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "會在體內製造氣體或是吐出氣體 來調節飛在空中的高度。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "散佈詛咒"
		},

		effect: {
			'zh-tw': "將8個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic", "Psychic", "Psychic"]
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