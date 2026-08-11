import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Ambipom G",
		'fr-fr': "Capidextre  Niv. 40",
		'de-de': "Ambidiffel G"
	},

	illustrator: "Makoto Imai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [424],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Code",
				'fr-fr': "Queue codée",
				'de-de': "Schweifcode"
			},
			effect: {
				'en-us': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				'de-de': "Entferne 1 an das Verteidigende Pokémon angelegte Energiekarte und lege sie an 1 anderes Pokémon deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Snap Attack",
				'fr-fr': "Attaque soudaine",
				'de-de': "Schnappangriff"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 20 instead of 60.",
				'fr-fr': "Si le Pokémon Défenseur possède des cartes Énergie, les dégâts de base de cette attaque sont de 20 au lieu de 60.",
				'de-de': "Wenn am Verteidigenden Pokémon mindestens 1 Energiekarte angelegt ist, beträgt der Grundschaden dieses Angriffs 20 Schadenspunkte anstelle von 60 Schadenspunkten."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278630,
				tcgplayer: 83530
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278630,
				tcgplayer: 83530
			}
		},
	],

}

export default card
