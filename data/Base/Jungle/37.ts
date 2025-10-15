import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
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
		en: "Oddish",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			}

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur fétide",
				de: "Fäulnisgeruch"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				fr: "Le Pokémon Défenseur et Ortide sont maintenant tous deux Confus (après le calcul des dégâts).",
				de: "Sowohl das verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nach der Schadensverteilung)."
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
		fr: "Le liquide qui s'écoule de sa bouche est comestible. Il sert à appâter sa proie."
	},

	thirdParty: {
		cardmarket: 273834,
		tcgplayer: 45140
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card
