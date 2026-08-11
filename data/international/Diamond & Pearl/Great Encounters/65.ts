import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'de-de': "Traumato"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can tell what people are dreaming by sniffing with its big nose. It loves fun dreams.",
	},

	thirdParty: {
		cardmarket: 277967,
		tcgplayer: 84976
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
