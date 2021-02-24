import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		177,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Plus Δ",
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psywave",
				fr: "Vague Psy",
			},
			effect: {
				en: "This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 10,

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
