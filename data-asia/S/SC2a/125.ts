import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "有著只要輕輕揮動翅膀就能吹走房屋的破壞力，因此躲在不為人知的海底生活。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "風壓"
		},

		effect: {
			'zh-tw': "若對手的手牌為5張以下，則這個招式失敗。"
		},

		damage: 250,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
