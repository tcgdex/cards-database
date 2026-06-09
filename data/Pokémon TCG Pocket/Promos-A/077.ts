import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Xurkitree",
		es: "Xurkitree"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [796],
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "Although it's alien to this world and a danger here, it's apparently\na common organism in the world where it normally lives.",
		es: "Para los seres de este mundo resulta extraño y peligroso, pero\nen el mundo del que procede es una criatura muy común."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electronica",
			es: "Electrónica"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card