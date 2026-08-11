import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "催眠貘"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "會讓獵物睡著，吃掉對方所做的夢。惡夢的味道是酸的，所以牠似乎不怎麼愛吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 10,
		cost: ["Colorless"]
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
	regulationMark: "E"
}

export default card