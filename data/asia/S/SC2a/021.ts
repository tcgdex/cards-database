import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小嘴蝸"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "一旦被敵人襲擊，便會關上殼蓋保護自己。不過蓋蓋蟲能打得開。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "噴汁"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
