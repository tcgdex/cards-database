import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bagon",
		de: "Kindwurm"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],
	
	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Barrier",
				de: "Sternenbarriere"
			},
			effect: {
				en: "As long as Bagon has any Energy attached to it, Bagon has no Weakness.",
				de: "Solange an Kindwurm mindestens 1 Energie angelegt ist, hat Kindwurm keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
				de: "Drachenwut"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				de: "Wirf 2 Münzen. Wenn mindestens eine Münze \"Zahl\" gezeigt hat, hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278870
	},

	variants: [
		{
			type: "reverse"
		}
	]
}

export default card
