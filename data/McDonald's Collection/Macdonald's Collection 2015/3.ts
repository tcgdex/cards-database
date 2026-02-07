import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		255,
	],
	set: Set,
	variants: [
		{ type: 'normal', size: 'standard' }
	],
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
