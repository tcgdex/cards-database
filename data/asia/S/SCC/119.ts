import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍捲雲V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "穿堂風"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "爆破之錘"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
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
	regulationMark: "E"
}

export default card