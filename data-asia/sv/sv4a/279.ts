import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。",
		'zh-tw': "特徵是厚實有力的肌肉，以及粗魯暴躁的性格。 這種樣子被稱為鬥戰種。"
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
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "コンバットタックル",
			'zh-tw': "鬥戰衝撞"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card