import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那",
		'zh-cn': "瑪沙那",
		ja: "アサナン"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "用冥想提高精神能量後， 就可以浮在空中。 １天會吃下１個樹果。",
		'zh-cn': "用冥想提高精神能量後， 就可以浮在空中。 １天會吃下１個樹果。",
		ja: "瞑想で 精神エネルギーを 高めて 空中に 浮かぶ。 １日に １個 木の実を 食べる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冥想",
			'zh-cn': "冥想",
			ja: "めいそう"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'zh-cn': "將這隻寶可夢恢復「20」HP。",
			ja: "このポケモンのHPを「20」回復する。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈打",
			'zh-cn': "劈打",
			ja: "チョップ"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	dexId: [307],
	rarity: "None",

	thirdParty: {
		cardmarket: 779067
	}
}

export default card