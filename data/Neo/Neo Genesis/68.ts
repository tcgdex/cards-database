import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hide",
				fr: "Cachette",
				de: "Verstecken"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Oddish.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Mystherbe.",
				de: "Wirf eine Münze. Verhindere bei 'Kopf' während des nächsten Zuges alle Auswirkungen von Angriffen auf Myrapla (einschließlich der Schadenspunkte)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
				de: "Absorber"
			},
			effect: {
				en: "Remove a number of damage counters from Oddish equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Oddish has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Mystherbe un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondis à la dizaine la plus proche). Si Mystherbe a moins de marqueurs de dégâts que cela, retirez-les tous.",
				de: "Entferne Schaden von Myrapla in Höhe der Hälfte des Schadens, der dem Verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz verrechnet wurde) (auf die nächsten 10 aufgerundet). Falls Myrapla weniger Schaden hat, entferne allen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Réveillé par le clair de lune, il rode pendant la nuit. Le jour, il reste tranquillement sous terre."
	}
}

export default card
