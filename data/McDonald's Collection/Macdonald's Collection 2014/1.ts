import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		13,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: [
		"Grass",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110406,
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Sécrétion",
			},
			damage: "10",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
}

export default card
