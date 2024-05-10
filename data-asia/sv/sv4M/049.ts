import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン2",
		'zh-tw': "多邊獸Ⅱ"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [233],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ＡＩ機能を 搭載した 結果 ポリゴン２ 同士にしか わからない 謎の 言語を 話しはじめた。",
		'zh-tw': "搭載了ＡＩ功能後，開始說起了只有多邊獸Ⅱ彼此之間才能了解的神秘語言。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パワーボール",
			'zh-tw': "力量球"
		},

		damage: 50,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card