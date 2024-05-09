import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ネンドール"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [344],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "古代人の 泥人形から 生まれたらしい。 念力を 使い 空中に 浮いて 移動する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ドッカンドール"
		},

		effect: {
			ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。その後、このポケモンに120ダメージ。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "サイコトリップ"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card