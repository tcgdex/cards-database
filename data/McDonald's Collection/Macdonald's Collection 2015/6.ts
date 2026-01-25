import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110424,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Mimi-Queue",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Boule Élek",
			},
			damage: "30",
		},
	],
}

export default card
