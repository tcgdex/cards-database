import { Card } from "../../../interfaces"
import Set from "../SVJL"

const card: Card = {
	set: Set,

	name: {
		ja: "ビッパ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	dexId: [399],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "いつも 大木や 石を かじって 丈夫な 前歯を 削っている。 水辺に 巣を 作り 暮らす。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へっちゃらがお"
		},

		effect: {
			ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっさつまえば"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card