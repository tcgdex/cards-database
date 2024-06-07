import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Vanillish"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Vanillish membekukan musuh menggunakan hawa dingin bersuhu -100 °C, tapi tidak sampai merebut nyawa musuh tersebut karena sifatnya yang baik hati."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Frost Smash"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card