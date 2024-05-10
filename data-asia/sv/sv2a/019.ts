import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コラッタ",
		'zh-tw': "小拉達"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
		'zh-tw': "雖然是常見的寶可夢，但還是要小心。 銳利的門牙十分堅硬， 就連木材也能輕易咬斷。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずをかじる",
			'zh-tw': "咬傷口"
		},

		damage: "20+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
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