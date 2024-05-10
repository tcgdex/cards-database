import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロボン",
		'zh-tw': "蚊香泳士"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [62],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "泳ぎ だけでなく 格闘技も 得意。 鍛えあげた 腕から 豪快な パンチを 繰りだす。",
		'zh-tw': "除了游泳之外，也擅長使用格鬥技。完美鍛鍊的手臂 可以使出豪邁的拳擊。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "バブルこうせん",
			'zh-tw': "泡沫光線"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ごうかいパンチ",
			'zh-tw': "豪邁拳"
		},

		damage: "100+",

		effect: {
			ja: "コインを1回投げオモテなら、150ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加150點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card