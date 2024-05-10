import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ドッコラー",
		'zh-tw': "搬運小匠"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Kouki Saitou",
	dexId: [532],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "角材を 振り回して 戦う。 重い 角材を 苦もなく 持つようになると 進化は 近い。",
		'zh-tw': "會亂揮木材來戰鬥。如果可以 不費勁地搬起沉重的木材， 就代表牠即將要進化了。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ぜんりょくパンチ",
			'zh-tw': "全力拳"
		},

		damage: 40,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
