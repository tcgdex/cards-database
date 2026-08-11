import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "傳說中被當成海神的寶可夢。有著在暴風雨之夜被人看見其身影的傳說。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "氣旋球"
		},

		effect: {
			'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "深擊粉碎"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 160,
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