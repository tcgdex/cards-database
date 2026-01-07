import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		742,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: [
		"Fairy",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152690,
	},
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				fr: "Papillonnement",
			},
			damage: "10",
			effect: {
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez ces dégâts.",
			},
		},
	],
}

export default card
