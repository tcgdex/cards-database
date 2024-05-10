import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布撥"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'zh-tw': "臉頰上的電囊尚未發達。 必須拼命摩擦前腳的肉球， 才終於能製造出電力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈啪巴掌"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "劈啪巴掌"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card