import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152685,
	},
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Cage-Éclair",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Boule Élek",
			},
			damage: "50",
		},
	],
}

export default card
