import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾウドウ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [878],
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "５トンの 荷物を 持ち上げられる。 朝になると 群れで 洞窟へと 向かい エサの 鉱石を 探す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "たいあたり"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "がちんこ"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	rarity: "None"
}

export default card