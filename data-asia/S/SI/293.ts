import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鋼蛇"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鋼鐵橫掃"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card