import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斑斑馬"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "放電時鬃毛會發光。利用鬃毛閃爍的次數及節奏與夥伴交談。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雷電箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card