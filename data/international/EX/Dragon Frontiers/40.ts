import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Swellow δ",
		'fr-fr': "Heledelle δ",
		'de-de': "Schwalboss"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extra Wing",
				'fr-fr': "Aile supplémentaire",
				'de-de': "Extra-Flügel"
			},
			effect: {
				'en-us': "The Retreat Cost for each of your Stage 2 Pokémon-ex is 0.",
				'fr-fr': "Le Coût de retraite de chacun de vos Pokémon-ex de Niveau 2 est de 0.",
				'de-de': "Deine Pokémon-ex der Phase 2 haben Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Heledelle lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Schwalboss zugefügt werden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 277245
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
