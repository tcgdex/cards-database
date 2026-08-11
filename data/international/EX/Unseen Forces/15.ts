import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'de-de': "Mogelbaum"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Copy",
				'fr-fr': "Copiage",
				'de-de': "Copy"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Copiage copie cette attaque. Cette attaque est sans effet si Simularbre ne possède pas suffisamment d'Énergie pour utiliser cette attaque. (Vous devez toujours faire ce que l'attaque indique). Simularbre utilise cette attaque.",
				'de-de': "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doen't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karate Chop"
			},
			effect: {
				'en-us': "Does 50 damage minus 10 damage for each damage counter on Sudowoodo.",
				'fr-fr': "Inflige 50 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Simularbre.",
				'de-de': "Does 50 damage minus 10 damage for each damage counter on Sudowoodo."
			},
			damage: "50-",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89593,
				cardmarket: 276661
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89593,
				cardmarket: 276661
			},
		}
	],
}

export default card
