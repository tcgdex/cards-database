import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhydon",
		fr: "Rhinoféros de Team Magma",
		de: "Team Magmas Rizeros"
	},

	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 90,

	types: [
		"Fighting",
		"Darkness",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Magma Jab",
				fr: "Taquet de Magma",
				de: "Magma Jab"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "This attack's damage is not affected by Resistance."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Shoot Down",
				fr: "Démolir",
				de: "Shoot Down"
			},
			effect: {
				en: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused.",
				fr: "Si le nom du Pokémon Défenseur comporte Team Aqua, le Pokémon Défenseur est maintenant Confus.",
				de: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275988,
		tcgplayer: 89840
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
