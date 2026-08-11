import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可多拉"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card