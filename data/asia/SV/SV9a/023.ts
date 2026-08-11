import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カスミのヒトデマン",
		'zh-tw': "<小霞的>海星星",
		'zh-cn': "<小霞的>海星星"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
		'zh-tw': "會被魚寶可夢啄食，但是 即使身體被咬斷也能很快就 再生，所以一點都不在意。",
		'zh-cn': "會被魚寶可夢啄食，但是 即使身體被咬斷也能很快就 再生，所以一點都不在意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "バブルこうせん",
			'zh-tw': "泡沫光線",
			'zh-cn': "泡沫光線"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card