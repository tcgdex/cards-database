import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クチート"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [303],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "鋼の ツノが 変形して できた 大きな アゴで 相手に がぶりと 噛みつくのだ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スペシャルイーター"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "するどいキバ"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card