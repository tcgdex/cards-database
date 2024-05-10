import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "ツノから 水を 吹きだし 泳ぐ。 脂肪分が 多く 浮きやすいのが ウォーター種の 特徴。",
		'zh-tw': "會從角噴出水來游泳。脂肪含量高而容易浮在水上 是水瀾種的特徵。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりのつの",
			'zh-tw': "憤怒之角"
		},

		damage: "20+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ウォーターダイブ",
			'zh-tw': "水俯衝"
		},

		effect: {
			ja: "相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
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