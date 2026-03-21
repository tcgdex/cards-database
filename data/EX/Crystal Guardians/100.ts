import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Celebi Star",
		fr: "Celebi",
		de: "Celebi *"
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
				en: "Time Travel",
				fr: "Voyage temporel",
				de: "Zeitreise"
			},
			effect: {
				en: "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.",
				fr: "Si les dégâts d'une attaque de votre adversaire mettent Celebi  K.O, vous pouvez lancer une pièce. Si c'est face, Celebi  n'est pas mis K.O. Défaussez toutes les cartes attachées à Celebi  et placez-le au dessous de votre deck.",
				de: "Wenn der Schaden eines gegnerischen Angriffs Celebi ☆ kampfunfähig machen würde, wirf 1 Münze. Bei \"Kopf\" wird Celebi nicht kampfunfähig. Lege stattdessen Celebi ☆ unter dein Deck und alle Karten, die an Celebi ☆ angelegt sind, auf den Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Shade",
				fr: "Ombre-feuille",
				de: "Blattschatten"
			},
			effect: {
				en: "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
				fr: "Comptabilisez le nombre d'Énergies attachées à Celebi . Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				de: "Zähle die Anzahl Energien, die an Celebi ☆ abgelegt sind. Lege genauso viele Schadensmarken auf 1 gegnerisches Pokémon."
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
