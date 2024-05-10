import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		'zh-tw': "炭小侍"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "マグナムパンチ",
			'zh-tw': "增量拳"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card