import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘V"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "伏特攻擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 210,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card