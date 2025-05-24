import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那",
		'zh-cn': "瑪沙那",
		ja: "アサナン"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "每天都少不了瑜珈的修行。 會藉著冥想提高 自身的精神力。",
		'zh-cn': "每天都少不了瑜珈的修行。 會藉著冥想提高 自身的精神力。",
		ja: "毎日 ヨガの 修行を 欠かさない。 瞑想を することで 精神力を 高めている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續擊拳",
			'zh-cn': "連續擊拳",
			ja: "ワンツーパンチ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。",
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [307]
}

export default card