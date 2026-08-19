import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		de: "Rihorn"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

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
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It is inept at turning because of its four short legs. It can only charge and run in one direction.",
		de: "Aufgrund seiner kurzen Beine kann es sich nicht umdrehen. Es kann immer nur in eine Richtung laufen."
	},

	thirdParty: {
		cardmarket: 288487,
		tcgplayer: 113707
	}
}

export default card
