import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "當牠用力抓撓胸部的突起物來製造電力時，四周會響起如同吉他演奏般的聲音。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒嚎"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到20點傷害。將對手的戰鬥寶可夢【中毒】。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
