import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		595,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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



}

export default card
