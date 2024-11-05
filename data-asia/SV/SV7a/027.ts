import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙漠蜻蜓ex",
		'zh-cn': "沙漠蜻蜓ex",
		ja: "フライゴンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "風暴返",
			'zh-cn': "風暴返",
			ja: "ストームバック"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 130,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "橄欖石音波",
			'zh-cn': "橄欖石音波",
			ja: "ペリドットソニック"
		},

		effect: {
			'zh-tw': "對手的所有「寶可夢【ex】・【V】」各受到100點傷害。這個招式的傷害不計算弱點・抵抗力。",
			'zh-cn': "對手的所有「寶可夢【ex】・【V】」各受到100點傷害。這個招式的傷害不計算弱點・抵抗力。",
			ja: "相手の「ポケモンex・V」全員に、それぞれ100ダメージ。このワザのダメージは弱点・抵抗力を計算しない。"
		},

		cost: ["Water", "Fighting", "Metal"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card