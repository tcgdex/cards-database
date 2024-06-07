import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ウデッポウ"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	dexId: [692],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ハサミは 取れても 再生する。 中の 身は 食べられるが クセが 強いので 好みは 分かれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はさむ"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card