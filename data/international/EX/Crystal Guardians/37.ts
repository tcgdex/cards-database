import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plunder",
				'fr-fr': "Pillage",
				'de-de': "Plündern"
			},
			effect: {
				'en-us': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				'de-de': "Bevor der Schaden zugefügt wird, lege alle an dem Verteidigenden Pokémon angelegten Trainerkarten auf den Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277118,
		tcgplayer: 86818
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
