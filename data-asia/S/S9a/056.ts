import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓頭夜鷹"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "雙眼有著特殊的構造，只要有些微的光線，即使在黑暗中 也能看得像白天一樣清楚。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "靜默之翼"
		},

		effect: {
			'zh-tw': "查看對手的手牌。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "空氣斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card