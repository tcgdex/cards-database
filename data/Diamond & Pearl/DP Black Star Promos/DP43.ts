import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Probopass G",
		fr: "Tarinorme",
		de: "Voluminas G"
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
				en: "Nose Unit",
				fr: "Bout du nez",
				de: "Naseneinheit"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Bodies. (Vous ne pouvez pas appliquer la Faiblesse et Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners, das mindestens 1 Poké-Body hat, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Loud Snort",
				fr: "Gros grognement",
				de: "Lautes Schnaufen"
			},
			effect: {
				en: "Probopass 's Retreat Cost is 0 until the end of your next turn.",
				fr: "Le Coût de retraite de Tarinorme  est de 0 jusqu'à la fin de votre prochain tour.",
				de: "Voluminas G hat Rückzugskosten 0 bis zum Ende deines nächsten Zuges."
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

	variants: [
		{
			type: "holo",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
