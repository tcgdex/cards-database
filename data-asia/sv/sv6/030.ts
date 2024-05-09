import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ミロカロス"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Taira Akitsu",
	dexId: [350],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "澄んだ 湖の 底に 棲む。 戦争が 起こるとき 現れ 人々の 心を いやす。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "なぎのきょうち"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手の場のポケモンと、そのポケモンについているすべてのカードは、手札にもどせない。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card
