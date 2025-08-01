import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		it: "Hippowdon",
		pt: "Hippowdon",
		de: "Hippoterus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "Eri Yamaki",

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Hammer In",
			de: "Einhämmern"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			en: "Sand Press",
			fr: "Pression Sableuse",
			es: "Presión de Arena",
			it: "Silicopressa",
			pt: "Sand Press",
			de: "Sandpresse"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Discard 2 Energy from this Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 220,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
	},

	description: {
		en: "When roused to violence by its rage, it spews out the quantities of sand it has swallowed and whips up a sandstorm."
	},

	dexId: [450],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574133
	}
}

export default card