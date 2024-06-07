import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "主要的獵物是鳥寶可夢。會從羽毛的縫隙裡噴出 火花威嚇對手。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "快速俯衝"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "狠心一擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card