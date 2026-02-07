import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		111,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110426,
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Bélier",
			},
			damage: "40",
			effect: {
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
		},
	],
}

export default card
