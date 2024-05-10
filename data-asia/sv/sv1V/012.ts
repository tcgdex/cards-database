import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。",
		'zh-tw': "帕底亞當地會用熱辣娃掉落的門牙來做料理， 所以超級無敵霹靂辣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ピリから",
			'zh-tw': "麻辣"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card