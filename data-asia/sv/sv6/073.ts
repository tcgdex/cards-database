import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ココドラ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gapao",
	dexId: [304],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鉄鉱石や たまに 鉄道の レールを 食べて 体を 守る 鋼の 鎧が つくられる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "すてみタックル"
		},

		damage: 20,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card
