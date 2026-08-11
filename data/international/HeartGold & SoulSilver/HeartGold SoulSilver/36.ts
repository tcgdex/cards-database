import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'de-de': "Heiteira"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 130,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Link",
				'fr-fr': "Chaîne d’énergie",
				'de-de': "Energie-Verbindung"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Blissey.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Leuphorie.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Heiteira an."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Blissey does 40 damage to itself.",
				'fr-fr': "Leuphorie s’inflige 40 dégâts.",
				'de-de': "Heiteira fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Anyone who takes even one taste of Blissey’s egg becomes unfailingly caring and pleasant to everyone."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83923,
				cardmarket: 279008
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83923,
				cardmarket: 279008
			}
		},
	],

}

export default card
