import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [117],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "細い 口だが 吸引力は 強い。 口より 大きな エサも 一瞬で 吸いこみ 食べるぞ。",
		'zh-tw': "嘴部雖然細，但吸力卻很強。就算是比嘴還要大的食物， 也都能瞬間吸進口裡吃掉。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルこうせん",
			'zh-tw': "泡沫光線"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
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