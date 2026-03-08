import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sidestep",
				fr: "Pas de côté",
				de: "Schritt zur Seite"
			},
			effect: {
				en: "If Bonsly is anywhere under Sudowoodo, flip a coin. If heads, prevent all effects of an attack, including damage, done to Sudowoodo during your opponent's next turn.",
				fr: "Si Manzaï se trouve en dessous de Simularbre, lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Simularbre lors du prochain tour de votre adversaire.",
				de: "Wenn Mobai sich an beliebiger Stelle unter Mogelbaum befindet, wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Mogelbaum zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Persuade",
				fr: "Persuader",
				de: "Überreden"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon. The new Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc. Le nouveau Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus. Das neue Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "On pourrait le prendre pour un arbre, mais il est plus proche d'une pierre. L'eau est son point faible."
	},

	thirdParty: {
		cardmarket: 277664,
		tcgplayer: 89594
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
