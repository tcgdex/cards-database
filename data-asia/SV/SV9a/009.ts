import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カジッチュ",
		'zh-tw': "啃果蟲",
		'zh-cn': "啃果蟲"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [840],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "りんごの 果肉を 食べて 育つ。 体液で 皮の 強度を 高めつつ 腐らないようにする。",
		'zh-tw': "吃蘋果的果肉長大。 會用體液增加蘋果外皮的 強度，同時避免蘋果腐爛。",
		'zh-cn': "吃蘋果的果肉長大。 會用體液增加蘋果外皮的 強度，同時避免蘋果腐爛。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "プチドレイン",
			'zh-tw': "小吸取",
			'zh-cn': "小吸取"
		},

		damage: 10,

		effect: {
			ja: "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			'zh-cn': "將這隻寶可夢恢復「10」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card