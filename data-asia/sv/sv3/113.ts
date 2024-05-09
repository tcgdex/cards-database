import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ピィ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [173],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "お星さまのような シルエット。 その姿から 流れ星に乗って やって来ると 信じられている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "にぎにぎドロー"
		},

		effect: {
			ja: "自分の手札が7枚になるように、山札を引く。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0
}

export default card