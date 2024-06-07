import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "不集結成群，而是單獨生活。只會聽命於能夠引出自己力量的訓練家。"
	},

	stage: "Stage1",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card