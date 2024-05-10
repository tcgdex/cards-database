import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		'zh-tw': "炭小侍"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [935],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card