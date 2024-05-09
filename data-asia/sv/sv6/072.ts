import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "エアームド"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "toi8",
	dexId: [227],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "抜け落ちた 羽根から 剣が 作られることから 紋章の 図案として 人気が 高い。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "カッターウインド"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "おおあらし"
		},

		damage: 90,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card
