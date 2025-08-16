import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		fr: "Tropius",
		en: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Feuille Sangsue",
			en: "Leaf Drain",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			de: "Blattsauger"
		},

		effect: {
			fr: "Soignez 20 dégâts de ce Pokémon.",
			en: "Heal 20 damage from this Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Brise Tropicale",
			en: "Tropic Breeze",
			es: "Brisa Tropical",
			it: "Brezza dei Tropici",
			pt: "Brisa Tropical",
			de: "Tropische Brise"
		},

		effect: {
			fr: "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			es: "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Taira Akitsu",

	thirdParty: {
		cardmarket: 715479
	}
}

export default card