import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ウソハチ"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [438],
	hp: 30,
	types: ["Fighting"],

	description: {
		ja: "体内の 余計な 水分を 目 から 出して 調節する。 泣いているように 見えるだけ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "ビィビィなく"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 0
}

export default card