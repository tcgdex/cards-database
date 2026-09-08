import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
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
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das verteidigende Pokémon ist jetzt vergiftet."
			}

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Foul Odor",
				'fr-fr': "Odeur fétide",
				'de-de': "Fäulnisgeruch"
			},
			effect: {
				'en-us': "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				'fr-fr': "Le Pokémon Défenseur et Ortide sont maintenant tous deux Confus (après le calcul des dégâts).",
				'de-de': "Sowohl das verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nach der Schadensverteilung)."
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
	retreat: 1,


	description: {
		'en-us': "The fluid that oozes from its mouth isn't drool; it is a nectar that is used to attract prey.",
		'fr-fr': "Le liquide qui s'écoule de sa bouche est comestible. Il sert à appâter sa proie."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273834,
				tcgplayer: 45140
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273834,
				tcgplayer: 45140
			}
		}
	],
}

export default card
