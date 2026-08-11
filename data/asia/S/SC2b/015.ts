import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燃燒蟲"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "棲息在火山的山腳下。會從５隻角噴出火焰，擊退襲來的敵人。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
