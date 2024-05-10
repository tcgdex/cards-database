import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Vanillite"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Kabarnya Vanillite terlahir dari pilar es. Pokémon ini membekukan daerah sekitarnya dengan menghembuskan hawa dingin bersuhu -50 °C agar nyaman untuk ditinggali."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sejuk"
		},

		damage: 40,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card