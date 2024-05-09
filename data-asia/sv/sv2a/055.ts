import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルダック"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すいなんきゅうじょ"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを4枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "スーパースプラッシュ"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card