import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "カプ・ブルル"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	dexId: [787],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "大木を 引き抜き ブンブン 振り回す。 草木を 茂らせて そのエネルギーを 吸収する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			ja: "ウッドハンマー"
		},

		damage: 220,

		effect: {
			ja: "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	rarity: "None"
}

export default card