import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザード",
		'zh-tw': "火恐龍"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。",
		'zh-tw': "如果牠在戰鬥中亢奮起來，就會噴出灼熱的火焰， 把周圍的東西燒得一乾二淨。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "だいもんじ",
			'zh-tw': "大字爆炎"
		},

		damage: 90,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card