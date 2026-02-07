import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "match",
	category: "Pokemon",
	description: {
		en: "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race.",
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Hone Claws",
				fr: "Aiguisage",
			},
			effect: {
				en: "During your next turn, each of this Pokémon’s attacks does 30 more damage (before applying Weakness and Resistance).\nFighting",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Griffe",
			},
			damage: "10",
		},
	],
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	rarity: "None",
	hp: 70,
	types: [
		"Fighting",
	],
	thirdParty: {
		tcgplayer: 84967,
	},
}

export default card
