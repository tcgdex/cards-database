import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Alomomola",
		fr: "Mamanbo"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [594],
	hp: 110,
	types: ["Water"],

	description: {
		en: "It gently holds injured and weak Pokémon in its\nfins. Its special membrane heals their wounds.",
		fr: "Il berce les Pokémon blessés ou affaiblis dans ses nageoires et les guérit grâce à la membrane dont il est recouvert."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse",
			fr: "Vibraqua"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card