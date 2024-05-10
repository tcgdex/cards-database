import { Card } from "../../../interfaces"
import Set from "../SVEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風妖精"
	},

	illustrator: "KYUPIYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "每當沐浴陽光，身上的棉花就會膨脹。如果膨脹過了頭， 牠就會把棉花扯開到處亂撒。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "妖精之風"
		},

		damage: 50,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card