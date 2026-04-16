import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		255,
	],
	set: Set,
	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	thirdParty: {
		cardmarket: 293319,
		tcgplayer: 110433,
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Flammèche",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à ce Pokémon.",
			},
		},
	],
}

export default card
