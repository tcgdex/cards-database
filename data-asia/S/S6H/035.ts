import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙奈朵"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果是為了保護訓練家，牠會不惜用盡自己的精神力量製造出小型黑洞。"
	},

	stage: "Stage2",

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card