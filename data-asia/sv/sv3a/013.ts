import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ランターン",
		'zh-tw': "電燈怪"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [171],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "強い 光を 放ち 獲物の 目を 眩ませる。 隙が できたら 電撃を おみまいする。",
		'zh-tw': "發出強光讓獵物暫時失明。趁獵物露出破綻時， 用電擊招呼對手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ピッカリだま",
			'zh-tw': "光彈"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "アクアスパーク",
			'zh-tw': "水流電光"
		},

		damage: "80+",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、120ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【水】能量，則增加120點傷害。"
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