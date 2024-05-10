import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "椰蛋樹"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "３顆頭團結一致發出的精神力量威力強大。天氣 變陰時動作就會變得遲緩。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "催眠波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "超能閉環"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card