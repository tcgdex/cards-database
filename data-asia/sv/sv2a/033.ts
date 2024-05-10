import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドリーノ",
		'zh-tw': "尼多力諾"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。",
		'zh-tw': "神經質且容易發脾氣打架。當體內的腎上腺素增加時， 毒素的濃度也會提升。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "かいりきホーン",
			'zh-tw': "怪力角擊"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card