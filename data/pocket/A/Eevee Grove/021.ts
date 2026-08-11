import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [594],
	hp: 110,
	types: ["Water"],

	description: {
		'en-us': "It gently holds injured and weak Pokémon in its\nfins. Its special membrane heals their wounds.",
		'fr-fr': "Il berce les Pokémon blessés ou affaiblis dans ses nageoires et les guérit grâce à la membrane dont il est recouvert."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Pulse",
			'fr-fr': "Vibraqua"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card