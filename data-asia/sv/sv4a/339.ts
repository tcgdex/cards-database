import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマン",
		'zh-tw': "海豚俠"
	},

	illustrator: "akagi",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "太古の 遺伝子が 覚醒。 片ヒレで クルーズ船を 軽々 持ち上げる 怪力の 持ち主。",
		'zh-tw': "太古基因覺醒之後的樣子。力氣很大，只用單邊的鰭也可以輕輕鬆鬆舉起遊輪。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ジェットパンチ",
			'zh-tw': "噴射拳"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ジャスティスキック",
			'zh-tw': "正義踢"
		},

		damage: 210,

		effect: {
			ja: "この番、このポケモンがベンチからバトル場に出ていないなら、このワザは失敗。",
			'zh-tw': "在這個回合，若沒有從備戰區將這隻寶可夢放置於戰鬥場，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card