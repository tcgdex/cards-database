import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可多拉"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "有著用鋼甲撞擊岩石時產生的火花大小來顯示自己有多強大的習性。"
	},

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