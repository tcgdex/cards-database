import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Fog",
				fr: "Brouillard Sinistre",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez un marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
