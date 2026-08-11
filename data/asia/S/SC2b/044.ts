import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "能從刺的尖端放電。會用銳利的牙齒刮取附在岩石上的海藻來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "團團旋轉"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "啄"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
