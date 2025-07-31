import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Dusk Mane Necrozma",
		es: "Necrozma Melena Crepuscular"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "This is its form while it is devouring the light of\nSolgaleo. It pounces on foes and then slashes\nthem with the claws on its four limbs and back.",
		es: "Forma que adopta tras alimentarse de la luz de Solgaleo.\nSe lanza sobre su oponente y lo desgarra sin piedad."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Black Metal",
			es: "Black Metal"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"],

		effect: {
			en: "Discard a {M} Energy from this Pokémon.",
			es: "Descarta 1 Energía {M} de este Pokémon."
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