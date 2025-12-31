import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
		de: "Magneton",
		it: "Magneton"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
		it: "Magnemite"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-éclair",
				de: "Donnerwelle",
				it: "Tuononda"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Finale",
				it: "Autodistruzione"
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself.",
				fr: "Inflige 20 dégâts à chaque Pokémon sur le Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.) Magneton s'inflige 80 dégâts.",
				de: "Fügt jedem Pokémon auf der Bank eines Spielers 20 Schadenspunkte zu. (Schwäche und Resistenz nicht auf Pokémon auf der Bank anwenden!) Magneton fügt sich selbst 80 Schadenspunkte zu.",
				it: "Infligge 20 danni a ogni Pokémon della Panchina di ogni giocatore. (Non applicare Debolezza e Resistenza per i Pokémon in Panchina.) Magneton si infligge 80 danni."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Constitué de Magneti reliés les uns aux autres, il apparaît lorsque le soleil brille.",
		it: "Composto da diversi Magnemite collegati tra loro. Generalmente visibile quando compaiono le macchie solari. LIV 28 N.82"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273704,
		tcgplayer: 42433
	}
}

export default card
