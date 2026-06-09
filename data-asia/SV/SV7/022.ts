import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "原蓋海龜",
		'zh-cn': "原蓋海龜",
		ja: "プロトーガ"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "曾經棲息在古代的海洋裡。 雖然只能爬行，但是為了 尋找獵物也會到陸地上來。",
		'zh-cn': "曾經棲息在古代的海洋裡。 雖然只能爬行，但是為了 尋找獵物也會到陸地上來。",
		ja: "古代の 海に 棲んでいた。 這いずることしか できないが 獲物のために 陸にも 上がる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛濺迴轉",
			'zh-cn': "飛濺迴轉",
			ja: "スプラッシュターン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "將這隻寶可夢與備戰寶可夢互換。",
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [564],

	thirdParty: {
		cardmarket: 779036
	}
}

export default card