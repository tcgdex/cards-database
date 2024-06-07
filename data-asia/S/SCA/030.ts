import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霹靂電球"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會出現在發電廠等地方。很多人會把牠錯當成精靈球去觸碰而被電麻。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card