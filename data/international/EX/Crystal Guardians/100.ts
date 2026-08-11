import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Celebi ☆",
		'fr-fr': "Celebi ☆",
		'de-de': "Celebi ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Time Travel",
				'fr-fr': "Voyage temporel",
				'de-de': "Zeitreise"
			},
			effect: {
				'en-us': "If Celebi ☆ would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi ☆ is not Knocked Out, discard all cards attached to Celebi ☆, and put Celebi ☆ on the bottom of your deck.",
				'fr-fr': "Si les dégâts d'une attaque de votre adversaire mettent Celebi ☆ K.O, vous pouvez lancer une pièce. Si c'est face, Celebi ☆ n'est pas mis K.O. Défaussez toutes les cartes attachées à Celebi ☆ et placez-le au dessous de votre deck.",
				'de-de': "Wenn der Schaden eines gegnerischen Angriffs Celebi ☆ kampfunfähig machen würde, wirf 1 Münze. Bei \"Kopf\" wird Celebi ☆ nicht kampfunfähig. Lege stattdessen Celebi ☆ unter dein Deck und alle Karten, die an Celebi ☆ angelegt sind, auf den Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Shade",
				'fr-fr': "Ombre-feuille",
				'de-de': "Blattschatten"
			},
			effect: {
				'en-us': "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Comptabilisez le nombre d'Énergies attachées à Celebi Star. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Zähle die Anzahl Energien, die an Celebi Star abgelegt sind. Lege genauso viele Schadensmarken auf 1 gegnerisches Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 84149
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
