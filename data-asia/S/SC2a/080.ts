import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謎擬Ｑ"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了讓別人不要害怕自己，特意穿上了看似皮卡丘的破布，結果卻變得更加令人毛骨悚然。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "妨礙治癒者"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的所有備戰寶可夢的HP無法恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 30,
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
	regulationMark: "D"
}

export default card
