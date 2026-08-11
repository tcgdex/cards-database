import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kindle",
				'fr-fr': "Enflammer",
				'de-de': "Anzünden"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Flareon and then discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie attachée à Pyroli et défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Entferne 1 Energiekarte, die an Flamara angelegt ist, und lege sie auf deinen Ablagestapel. Lege danach 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a flame sac in its body. Its body temperature tops 1,650 degrees Fahrenheit before battle.",
	},

	thirdParty: {
		cardmarket: 278068,
		tcgplayer: 85496
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
