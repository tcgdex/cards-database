import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
		de: "Natu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Teleport",
				fr: "Téléport",
				de: "Teleport"
			},
			effect: {
				en: "Switch Natu with 1 of your Benched Pokémon.",
				fr: "Échangez Natu avec l’un des Pokémon de votre Banc.",
				de: "Tausche Natu gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279211
	}
}

export default card
