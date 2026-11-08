import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポッポ"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [16],
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なかまをよぶ"
		},

		effect: {
			'ja-jp': "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "たいあたり"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card