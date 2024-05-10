import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルダック",
		'zh-tw': "哥達鴨"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。",
		'zh-tw': "當牠用帶有水蹼的修長手腳全力游泳時， 不知為何額頭會閃閃發光。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すいなんきゅうじょ",
			'zh-tw': "水難救助"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを4枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多4張寶可夢卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "スーパースプラッシュ",
			'zh-tw': "超級飛濺"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card