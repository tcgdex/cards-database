import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍V"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "破壞光線"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 60,
		cost: ["Water", "Lightning"]
	}, {
		name: {
			'zh-tw': "光炮尾"
		},

		damage: 160,
		cost: ["Water", "Lightning", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card