import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "淚眼蜥"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "害怕時流下的淚水中含有相當於１００顆洋蔥的催淚成分，能讓對手淚流不止。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
