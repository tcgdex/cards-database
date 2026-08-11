import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長耳兔"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蹦跳射擊"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card