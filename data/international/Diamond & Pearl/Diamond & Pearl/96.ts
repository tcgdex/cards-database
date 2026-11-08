import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Toxic Spikes",
				'fr-fr': "Pics Toxik",
				'de-de': "Giftspitzen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. If Roselia is evolved from Budew, this attack does 10 damage to the Defending Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Si Roselia évolue de Rozbouton, cette attaque inflige 10 dégâts au Pokémon Défenseur.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Wenn Roselia sich aus Knospi entwickelt hat, fügt dieser Angriff dem Verteidigenden Pokémon 10 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sweet Spike",
				'fr-fr': "Douce pointe",
				'de-de': "Süßer Stachel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep. Remove 2 damage counters from 1 of your Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi. Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt. Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "ROSELIA raised on clean drinking water are known to grow vividly colored flowers.",
		'fr-fr': "Les Roselia élevés avec une eau claire et potable font de ravissantes fleurs bariolées."
	},

	thirdParty: {
		cardmarket: 277595,
		tcgplayer: 88819
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
