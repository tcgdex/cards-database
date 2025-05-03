import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒンバス",
		'zh-tw': "醜醜魚",
		'zh-cn': "醜醜魚"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
		'zh-tw': "最寒酸的寶可夢。 在有許多水草的河底 群聚而居。",
		'zh-cn': "最寒酸的寶可夢。 在有許多水草的河底 群聚而居。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はねにげ",
			'zh-tw': "躍起逃走",
			'zh-cn': "躍起逃走"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card