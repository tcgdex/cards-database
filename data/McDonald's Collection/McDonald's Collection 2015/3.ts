import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		255,
	],
	set: Set,
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
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
			},
			damage: "20",
			effect: {
				en: "Flip a coin. If tails, discard a fire Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à ce Pokémon.",
			},
		},
	],

	illustrator: "sui",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293319,
				tcgplayer: 110433
			}
		}
	]
}

export default card
