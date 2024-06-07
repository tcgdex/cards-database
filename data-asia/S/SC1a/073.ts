import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "瑜伽的力量讓第六感變得發達，使得牠變得能夠操縱精神力量。會在１個月裡不吃任何東西進行冥想。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "瑜伽踢"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力。"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card