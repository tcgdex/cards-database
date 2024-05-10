import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'zh-tw': "據說在用水晶燈火靈來充當照明設備的房子裡， 喪事會接連不斷。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "連鎖燃燒"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。"
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 150,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card