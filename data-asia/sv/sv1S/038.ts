import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "アサナン",
		'zh-tw': "瑪沙那"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [307],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "毎日 ヨガの 修行を 欠かさない。 瞑想を することで 精神力を 高めている。",
		'zh-tw': "每天都少不了瑜珈的修行。會藉著冥想提高 自身的精神力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "フェイント",
			'zh-tw': "佯攻"
		},

		damage: 10,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card