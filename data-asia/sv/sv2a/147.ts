import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニリュウ"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "激しく 流れ落ちる 滝に 守られながら 脱皮を 繰り返し どんどん 大きくなる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく"
		},

		damage: 10
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "ドラゴンウィップ"
		},

		damage: 40
	}],

	retreat: 1
}

export default card