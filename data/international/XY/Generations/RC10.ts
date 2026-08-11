import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
	},

	illustrator: "kanahei",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon. This Pokémon is now Asleep.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pachi",
				'fr-fr': "Pachi",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Crackle…buzz…Dedenne…?! Beep…",
	},

	thirdParty: {
		cardmarket: 288519
	}
}

export default card
