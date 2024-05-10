import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトデマン",
		'zh-tw': "海星星"
	},

	illustrator: "Arai Kiriko",
	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
		'zh-tw': "會被魚寶可夢啄食，但是即使身體被咬斷也能很快就 再生，所以一點都不在意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "スピードスター",
			'zh-tw': "高速星星"
		},

		damage: 30,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card