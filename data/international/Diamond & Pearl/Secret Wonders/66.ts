import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'de-de': "Farbeagle"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Color Pick",
				'fr-fr': "Choix de couleur",
				'de-de': "Farbwahl"
			},
			effect: {
				'en-us': "Search your deck for up to 3 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 3 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Trace",
				'fr-fr': "Calque",
				'de-de': "Fährte"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose an attack on 1 of your opponent's Benched Pokémon. Trace copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Smeargle performs that attack.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une attaque d'1 des Pokémon de Banc de votre adversaire. Calque copie cette attaque, Coût en Énergie excepté. (Vous devez toujours faire ce qu'indique l'attaque.) Queulorior utilise cette attaque.",
				'de-de': "Wirf 1 Münze. Wähle bei \"Kopf\" 1 Angriff von 1 Pokémon auf der Bank deines Gegners. Fährte kopiert diesen Angriff, mit Ausnahme der Energiekosten. (Du musst immer noch alles tun, was verlangt wird, um diesen Angriff durchzuführen.) Farbeagle führt diesen Angriff aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It marks its territory by using its tail like a paintbrush. There are more than 5,000 different marks.",
	},

	thirdParty: {
		cardmarket: 277819,
		tcgplayer: 89355
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
