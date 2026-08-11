import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Swirl",
				'fr-fr': "Tourbillon magnétique",
				'de-de': "Magnetwirbel"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkung. Bei \"Kopf\" lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276936,
		tcgplayer: 87079
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
