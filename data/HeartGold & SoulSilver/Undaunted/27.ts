import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Miracle Powder",
				fr: "Poudre miracle",
				de: "Wunderstaub"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c’est face, choisissez un État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" 1 Speziellen Zustand. Das Verteidigende Pokémon ist jetzt vom gewählten Speziellen Zustand betroffen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
