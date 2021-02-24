import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
