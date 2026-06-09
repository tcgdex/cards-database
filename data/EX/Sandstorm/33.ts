import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Poison Breath",
				fr: "Super haleine empoisonnée",
				de: "Super Poison Breath"
			},
			effect: {
				en: "Each Defending Pokémon is now Poisoned.",
				fr: "Chaque Pokémon Défenseur est maintenant Empoisonné.",
				de: "Each Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut",
				de: "Sky Uppercut"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "This attack's damage is not affected by Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275810,
		tcgplayer: 83954
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
