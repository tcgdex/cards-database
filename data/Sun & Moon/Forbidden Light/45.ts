import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		678,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Teleportation Burst",
				fr: "Téléportation Explosive",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
