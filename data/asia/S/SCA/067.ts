import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滑滑小子"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "與牠視線交會是很危險的！不管對手是誰，牠都會用頭錘招呼，是個難搞的傢伙。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card