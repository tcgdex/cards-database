import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ズピカ",
		'zh-tw': "光蚪仔"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時， 會閃爍頭部通知夥伴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんじは",
			'zh-tw': "電磁波"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
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