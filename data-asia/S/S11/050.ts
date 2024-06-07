import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謎擬Ｑ"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了讓別人不要害怕自己，特意穿上了看似皮卡丘的破布， 結果卻變得更加令人毛骨悚然。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蠱惑"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "極惡之禮"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "10×",
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
	regulationMark: "F"
}

export default card