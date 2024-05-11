import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆炸頭水牛"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "只用頭錘就能壓扁汽車。頭部的那團毛越大一團， 在群體裡的地位就會越高。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "放逐頭擊"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放置於放逐區。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "怪力角擊"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card