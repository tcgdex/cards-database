import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啃果蟲",
		'zh-cn': "啃果蟲",
		ja: "カジッチュ"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		'zh-cn': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		ja: "りんごの 中で 暮らしている。 りんごが なくなると 体の 水分が 抜けて 弱ってしまう。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "噴汁",
			'zh-cn': "噴汁",
			ja: "しるをとばす"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [840]
}

export default card