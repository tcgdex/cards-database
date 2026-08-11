import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "咬碎"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "跟斗重壓"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
