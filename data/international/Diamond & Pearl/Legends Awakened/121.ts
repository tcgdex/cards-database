import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
	],

	hp: 50,

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
				'en-us': "Psybeam",
				'fr-fr': "Rafale psy",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Faire des bonds",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "You may switch Spoink with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Spoink avec 1 des Pokémon de votre Banc.",
				'de-de': "Du kannst Spoink gegen 1 Pokémon auf deiner Bank austauschen."
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
		'en-us': "It bounces constantly, using its tail like a spring. The shock of bouncing keeps its heart beating.",
	},

	thirdParty: {
		cardmarket: 278270,
		tcgplayer: 89477
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
