import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋歐卡V"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "二重飛濺"
		},

		effect: {
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "水之颱風"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「水之颱風」。"
		},

		damage: 210,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card