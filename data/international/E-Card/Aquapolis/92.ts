import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [56],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mug",
				'fr-fr': "Agression",
				'de-de': "Ausrauben"
			},
			effect: {
				'en-us': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger les dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				'de-de': "Lege alle Trainerkarten, die an das Verteidigende Pokémon angelegt sind, auf den Ablagestapel deines Gegners, bevor der Schaden zugefügt wird."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 damage plus 10 more damage for each damage counter on Mankey.",
				'fr-fr': "Cette attaque inflige 10 dégâts plus 10 dégâts pour chaque marqueur de dégâts sur Férosinge.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus zusätzliche 10 Schadenspunkte für jede Schadensmarke auf Menki zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87172,
				cardmarket: 275166
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87172,
				cardmarket: 275166
			}
		},
	]
}

export default card
