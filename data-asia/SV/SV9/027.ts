import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのマルマイン",
		'zh-tw': "奇樹的頑皮雷彈",
		'zh-cn': "奇樹的頑皮雷彈"
	},

	illustrator: "GOTO minori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多， 移動的速度也會變得越快， 但同時也會變得更容易爆炸。",
		'zh-cn': "雖然儲存的電能越多， 移動的速度也會變得越快， 但同時也會變得更容易爆炸。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "どきどきボム",
			'zh-tw': "怦怦炸彈",
			'zh-cn': "怦怦炸彈"
		},

		effect: {
			ja: "このポケモンに100ダメージ。コインを1回投げオモテなら、相手のバトルポケモンをきぜつさせる。",
			'zh-tw': "這隻寶可夢受到100點傷害。擲1次硬幣若為正面，則將對手的戰鬥寶可夢【昏厥】。",
			'zh-cn': "這隻寶可夢受到100點傷害。擲1次硬幣若為正面，則將對手的戰鬥寶可夢【昏厥】。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ライトニングボール",
			'zh-tw': "雷電球",
			'zh-cn': "雷電球"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card