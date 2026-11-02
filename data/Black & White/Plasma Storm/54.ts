import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
		de: "Zubat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Flitting around in the dead of night, it sinks its fangs into its prey and drains a nearly fatal amount of blood.",
		de: "Bei Nacht sucht es unermüdlich nach Beute, der es mit seinen scharfen Zähnen große Blutmengen absaugt."
	},

	thirdParty: {
		cardmarket: 280794,
		tcgplayer: 85798
	}
}

export default card
