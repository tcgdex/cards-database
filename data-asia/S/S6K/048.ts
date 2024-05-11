import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狡猾天狗"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		'zh-tw': "在森林深處靜靜地生活。據說當牠搧動大大的團扇，就會刮起冬日寒風。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "天狗再見"
		},

		effect: {
			'zh-tw': "將身上放置有傷害指示物的對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "寒冬旋風"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 130,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card