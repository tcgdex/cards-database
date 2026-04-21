import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti",
		de: "Magnetilo",
		it: "Magnemite"
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
				en: "Thunder Wave",
				fr: "Cage-Éclair",
				de: "Donnerwelle",
				it: "Tuononda"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Finale",
				it: "Autodistruzione"
			},
			effect: {
				en: "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.",
				fr: "Inflige 10 dégâts à chaque Pokémon sur le Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.) Magneti s'inflige 40 dégâts.",
				de: "Fügt jedem Pokémon auf der Bank eines jeden Spielers 10 Schadenspunkte zu. (Schwäche und resistenz für Pokémon auf der Bank nicht anwenden!) Magnetilo fügt isch selbst 40 Schadenspunkte zu.",
				it: "Infligge 10 danni a ogni Pokémon nella Panchina di ogni giocatore. (Non applicare Debolezza e Resistenza per i Pokémon in Panchina.) Magnemite si infligge 40 danni."
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

	description: {
		fr: "Il contrôle la gravité pour pouvoir voler. Il attaque avec des Cages-Éclair.",
		it: "Usa l'antigravità per rimanere sospeso. Appare senza preavviso e usa attacchi come Tuononda. LIV 13 N.81"
	},

	thirdParty: {
		cardmarket: 273748,
		tcgplayer: 42397
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/036.ts"
		}
	]
}

export default card
