import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ナエトル"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [387],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいこうら"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-20」される。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "このは"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card