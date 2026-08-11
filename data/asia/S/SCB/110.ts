import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "東施喵"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "為了讓自己的身體看起來大一點來威嚇對手，會把分叉的尾巴緊緊纏在腰上。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "貓日和"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。然後，將這隻寶可夢【睡眠】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card