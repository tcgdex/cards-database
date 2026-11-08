import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dusk Mane Necrozma",
		'es-es': "Necrozma Melena Crepuscular"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [800],
	hp: 110,
	types: ["Metal"],

	description: {
		'en-us': "This is its form while it is devouring the light of\nSolgaleo. It pounces on foes and then slashes\nthem with the claws on its four limbs and back.",
		'es-es': "Forma que adopta tras alimentarse de la luz de Solgaleo.\nSe lanza sobre su oponente y lo desgarra sin piedad."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Black Metal",
			'es-es': "Black Metal"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a {M} Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía {M} de este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card