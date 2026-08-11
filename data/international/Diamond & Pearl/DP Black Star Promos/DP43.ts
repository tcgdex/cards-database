import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Probopass G",
		'fr-fr': "Tarinorme",
		'de-de': "Voluminas G"
	},
	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Nose Unit",
				'fr-fr': "Bout du nez",
				'de-de': "Naseneinheit"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Bodies. (Vous ne pouvez pas appliquer la Faiblesse et Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners, das mindestens 1 Poké-Body hat, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Loud Snort",
				'fr-fr': "Gros grognement",
				'de-de': "Lautes Schnaufen"
			},
			effect: {
				'en-us': "Probopass 's Retreat Cost is 0 until the end of your next turn.",
				'fr-fr': "Le Coût de retraite de Tarinorme  est de 0 jusqu'à la fin de votre prochain tour.",
				'de-de': "Voluminas G hat Rückzugskosten 0 bis zum Ende deines nächsten Zuges."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
		}
	],
}

export default card
