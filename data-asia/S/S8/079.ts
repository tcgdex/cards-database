import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土龍弟弟"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "一看到人就會用尾巴挖洞逃走。如果能夠遇見牠，代表你很幸運。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘巢穴"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，雙方的場上的所有【無】寶可夢的弱點全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滾動"
		},

		damage: 30,
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