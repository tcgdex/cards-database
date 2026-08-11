import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鰓魚海獸V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "原始冰凍"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】・【GX】」，無法使用招式。"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 220,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card