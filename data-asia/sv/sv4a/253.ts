import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケーシィ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [63],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "眠ったまま テレポート できる。 眠りが 深いほど 離れた 場所に 移動する という。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコショット"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card