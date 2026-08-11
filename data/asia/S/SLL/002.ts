import { Card } from "models/database/card"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那",
		'ja-jp': "アサナン"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "１天只吃１個樹果。藉由忍耐飢餓來來磨練自己的心。",
		'ja-jp': "１日 １個だけ 木の実を 食べる。 空腹に 耐えることで 心が 研ぎ澄まされていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "真氣突刺",
			'ja-jp': "きあいづき"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'ja-jp': "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [307]
}

export default card