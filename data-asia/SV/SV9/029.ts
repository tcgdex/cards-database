import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのズピカ",
		'zh-tw': "奇樹的光蚪仔",
		'zh-cn': "奇樹的光蚪仔"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。 感覺到有危險時， 會閃爍頭部通知夥伴。",
		'zh-cn': "會搖尾巴來發電。 感覺到有危險時， 會閃爍頭部通知夥伴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プチでんき",
			'zh-tw': "小電氣",
			'zh-cn': "小電氣"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card