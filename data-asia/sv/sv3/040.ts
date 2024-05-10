import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ズピカ",
		'zh-tw': "光蚪仔"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時，會閃爍頭部通知夥伴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ふりふりほうでん",
			'zh-tw': "輕輕放電"
		},

		damage: 20,

		effect: {
			ja: "相手のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
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