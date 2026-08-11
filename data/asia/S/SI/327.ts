import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉鐸拉戈"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "全身是由龍之能量的結晶打造而成。據說牠擁有 所有的龍寶可夢的力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨龍威能"
		},

		effect: {
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		},

		damage: "240-",
		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card