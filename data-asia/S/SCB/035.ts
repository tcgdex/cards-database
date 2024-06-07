import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵螯龍蝦"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "有著熱愛戰鬥的性格。當遇到靠近自己領地的對手，會毫不留情地將之打倒。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍落"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card