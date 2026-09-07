import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo",
		'it-it': "Magnemite"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-Éclair",
				'de-de': "Donnerwelle",
				'it-it': "Tuononda"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Selfdestruct",
				'fr-fr': "Destruction",
				'de-de': "Finale",
				'it-it': "Autodistruzione"
			},
			effect: {
				'en-us': "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon sur le Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.) Magneti s'inflige 40 dégâts.",
				'de-de': "Fügt jedem Pokémon auf der Bank eines jeden Spielers 10 Schadenspunkte zu. (Schwäche und resistenz für Pokémon auf der Bank nicht anwenden!) Magnetilo fügt isch selbst 40 Schadenspunkte zu.",
				'it-it': "Infligge 10 danni a ogni Pokémon nella Panchina di ogni giocatore. (Non applicare Debolezza e Resistenza per i Pokémon in Panchina.) Magnemite si infligge 40 danni."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Uses anti-gravity to stay suspended. Appears without warning and uses attacks like Thunder Wave.",
		'fr-fr': "Il contrôle la gravité pour pouvoir voler. Il attaque avec des Cages-Éclair.",
		'it-it': "Usa l'antigravità per rimanere sospeso. Appare senza preavviso e usa attacchi come Tuononda. LIV 13 N.81"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273748,
				tcgplayer: 42397
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107050
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107050
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
