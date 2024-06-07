import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赤面龍"
	},

	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "性情凶暴且狡猾。會搶奪其他寶可夢挖好的巢穴，來當作是自己的窩。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "報復"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加120點傷害。"
		},

		damage: "40+",
		cost: ["Fire", "Water"]
	}, {
		name: {
			'zh-tw': "龍爪"
		},

		damage: 120,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card