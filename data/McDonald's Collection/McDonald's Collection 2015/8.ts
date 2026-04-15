import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		111,
	],
	set: Set,
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
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293324,
				tcgplayer: 110426
			}
		}
	]
}

export default card
