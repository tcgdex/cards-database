import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏黏寶"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],

	description: {
		'zh-tw': "牠的觸角是優秀的感覺器官。只要感覺到有敵人就會立刻躲起來，以此存活到了現在。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "溶解"
		},

		damage: 20,
		cost: ["Water", "Psychic"]
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card