import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [44],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Miracle Powder",
				'fr-fr': "Poudre miracle",
				'de-de': "Wunderstaub"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'fr-fr': "Lancez une pièce. Si c’est face, choisissez un État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" 1 Speziellen Zustand. Das Verteidigende Pokémon ist jetzt vom gewählten Speziellen Zustand betroffen."
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
		'en-us': "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279280,
				tcgplayer: 85786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279280,
				tcgplayer: 85786
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480406
			}
		}
	],

}

export default card
