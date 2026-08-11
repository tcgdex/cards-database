import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Mr. Mime ex",
		'fr-fr': "M. Mime ex",
		'de-de': "Pantimos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Magic Odds",
				'fr-fr': "Impair magique",
				'de-de': "Ungerade Magie"
			},
			effect: {
				'en-us': "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 10, 30, 50, 70, 90, 110, 130, 150, or 170.",
				'fr-fr': "Si une attaque inflige des dégâts à M. Mime ex, prévenez-les si les dégâts sont de 10, 30, 50, 70, 90, 110, 130, 150 ou 170.",
				'de-de': "Verhindere allen Schaden der Pantimos ex durch Angriffe zugefügt wird, wenn Pantimos ex genau 10, 30, 50, 70, 90, 110, 130, 150 oder 170 Schadenspunkte zugeüg würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Breakdown",
				'fr-fr': "Réaction",
				'de-de': "Rückkopplung"
			},
			effect: {
				'en-us': "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				'fr-fr': "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				'de-de': "Zähle die Karten auf der Hand deines Gegners. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276286,
				tcgplayer: 87598
			},
		},
	]
}

export default card
