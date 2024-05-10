import { Card } from "../../../interfaces"
import Set from "../svF"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪納霏"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "浪之幕"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潑水"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card