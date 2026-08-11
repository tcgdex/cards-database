import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熊寶寶"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "不停舔著滲入了蜜糖的手掌。熊寶寶的蜜糖是由水果和大針蜂採集的花粉混合後製成的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "圓瞳"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "豎爪"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
