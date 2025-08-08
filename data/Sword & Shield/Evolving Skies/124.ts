import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	dexId: [895],
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Regidrago",
		fr: "Regidrago",
		es: "Regidrago",
		it: "Regidrago",
		pt: "Regidrago",
		de: "Regidrago"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Hammer In",
			de: "Einhämmern"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Dragon Energy",
			fr: "Draco-Énergie",
			es: "Dracoenergía",
			it: "Dragoenergia",
			pt: "Dragon Energy",
			de: "Drachenkräfte"
		},

		effect: {
			en: "This attack does 20 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 20 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "This attack does 20 less damage for each damage counter on this Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte weniger zu."
		},

		damage: "240-",
		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,

	description: {
		en: "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon."
	},

	regulationMark: "E"
}

export default card
