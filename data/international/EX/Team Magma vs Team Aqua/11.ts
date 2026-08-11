import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Rhydon",
		'fr-fr': "Rhinoféros de Team Magma",
		'de-de': "Team Magmas Rizeros"
	},

	illustrator: "T. Honda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 90,

	types: [
		"Fighting",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Magma Jab",
				'fr-fr': "Taquet de Magma",
				'de-de': "Magma Jab"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
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
				'en-us': "Shoot Down",
				'fr-fr': "Démolir",
				'de-de': "Shoot Down"
			},
			effect: {
				'en-us': "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le nom du Pokémon Défenseur comporte Team Aqua, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused."
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275788,
				tcgplayer: 89840
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275788,
				tcgplayer: 89840
			}
		},
	],

}

export default card
