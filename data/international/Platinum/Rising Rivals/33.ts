import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex Niv. 37",
		'de-de': "Relaxo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [143],

	hp: 100,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Pick and Collect",
				'fr-fr': "Choisir et collectionner",
				'de-de': "Auswählen und Einsammeln"
			},
			effect: {
				'en-us': "Search your discard pile for up to 4 basic Energy cards, show them to your opponent, and put them into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 4 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Roll Over",
				'fr-fr': "Se retourner",
				'de-de': "Umdrehen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, both Snorlax and the Defending Pokémon are now Asleep. If tails, Snorlax is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, Ronflex et le Pokémon Défenseur sont maintenant Endormis. Si c'est pile, Ronflex est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schlafen Relaxo und das Verteidigende Pokémon jetzt. Bei \"Zahl\" schläft Relaxo jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 4,

	description: {
		'en-us': "It stops eating only to sleep. It doesn't feel full unless it eats nearly 900 pounds a day."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278607,
				tcgplayer: 89390
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278607,
				tcgplayer: 89390
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				tcgplayer: 164281
			}
		}
	],

}

export default card
