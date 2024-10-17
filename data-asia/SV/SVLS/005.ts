import { Card } from "../../../interfaces"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	dexId: [935],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "おにび"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card