import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'fr-fr': "Roselia",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Petal Spikes",
				'fr-fr': "Pétales-piques",
				'de-de': "Blütenstachel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If Budew is anywhere under Roselia, the Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné. Si Rozbouton se trouve sous Roselia, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt und ist vergiftet. Wenn Knospi sich an beliebiger Stelle unter Roselia befindet, schläft das Verteidigende Pokémon jetzt und ist vergiftet."
			},
			damage: 20,

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
		'en-us': "Roselia raised on clean drinking water are known to grow vividly colored flowers.",
		'fr-fr': "Les Roselia élevés dans une eau claire et potable font de ravissantes fleurs bariolées."
	},

	thirdParty: {
		cardmarket: 278370,
		tcgplayer: 88821
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
