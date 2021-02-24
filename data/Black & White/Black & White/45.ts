import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		595,
	],
	hp: 30,
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
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
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

	retreat: 1,



}

export default card
