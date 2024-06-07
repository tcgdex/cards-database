import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "九尾狐變化"
		},

		effect: {
			'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式，作為這個招式使用。"
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "噴射火焰"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
