import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				de: "Psychoschuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				de: "Klatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
		de: "Es erfasst warme Gefühle von Menschen und Pokémon mit seinen Hörnern und wärmt sich daran auf."
	},

	thirdParty: {
		cardmarket: 280280,
		tcgplayer: 88564
	}
}

export default card
