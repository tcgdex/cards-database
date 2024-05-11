import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "混混鱷"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "有一雙在漆黑環境也能看見四周的特殊眼睛，讓牠即使 在半夜也能不受影響地去打獵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬碎"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card