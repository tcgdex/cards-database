import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搗蛋小妖",
		'zh-cn': "搗蛋小妖",
		ja: "ベロバー"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會成群住在一起，並透過 惡搞對方和彼此找碴 來磨練製造麻煩的身手。",
		'zh-cn': "會成群住在一起，並透過 惡搞對方和彼此找碴 來磨練製造麻煩的身手。",
		ja: "群れを 作って 暮らし おたがいに 悪戯や 嫌がらせを 仕掛けて その腕を 磨いているぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "掌擊",
			'zh-cn': "掌擊",
			ja: "ひらてうち"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊",
			'zh-cn': "利爪劈擊",
			ja: "ツメできりさく"
		},

		damage: 40,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [859]
}

export default card