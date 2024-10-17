import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "なぐる"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "かえんほうしゃ"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card