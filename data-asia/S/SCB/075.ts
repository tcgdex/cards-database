import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天蠍王"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物，再用牙齒朝弱點給予一刺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雜技"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×40點傷害。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "斷頭鉗"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card