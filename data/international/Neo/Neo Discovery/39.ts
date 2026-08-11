import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'de-de': "Hunduster"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Plunder",
				'fr-fr': "Pillage",
				'de-de': "Plündern"
			},
			effect: {
				'en-us': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger les dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur (avant qu'elles agissent sur les dégâts).",
				'de-de': "Lege alle Trainerkarten, die an das verteidigende Pokémon angelegt sind, auf den Ablagestapel deines gegners, bevor der Schaden zugefügt wird (bevor sie den Schaden beeinflussen können)."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It uses different kinds of cries for communicating with others of its kind and for pursuing its prey.",
		'fr-fr': "Il utilise différents types d'aboiements pour communiquer avec les autres de son espèce et pour chasser sa proie."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274516,
				tcgplayer: 86218
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274516,
				tcgplayer: 86218
			}
		}
	]
}

export default card

