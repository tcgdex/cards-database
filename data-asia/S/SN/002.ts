import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電飛鼠",
		ja: "エモンガ"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "會一邊到處放電一邊飛行，所以鳥寶可夢們不會靠近牠， 這讓牠可以獨佔食物。",
		ja: "電気を まき散らしながら 飛ぶので とりポケモンたちが 近付かない。 おかげで エサを ひとりじめできる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電擊",
			ja: "でんきショック"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E",
	dexId: [587]
}

export default card