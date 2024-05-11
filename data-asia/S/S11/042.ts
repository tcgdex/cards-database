import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "催眠貘"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "會讓獵物睡著，吃掉對方所做的夢。惡夢的味道是酸的， 所以牠似乎不怎麼愛吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神拳"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "催眠光線"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 20,
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
	regulationMark: "F"
}

export default card