import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card