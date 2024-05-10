import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル",
		'zh-tw': "三合一磁怪"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [82],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。",
		'zh-tw': "據說太陽黑子多的時候，這類連結在一起的小磁怪 會大量出現。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ピッカリだま",
			'zh-tw': "光彈"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "だいばくはつ",
			'zh-tw': "大爆炸"
		},

		damage: 90,

		effect: {
			ja: "このポケモンにも90ダメージ。",
			'zh-tw': "這隻寶可夢也受到90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card