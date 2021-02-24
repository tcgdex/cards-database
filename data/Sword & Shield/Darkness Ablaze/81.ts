import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mimikyu",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Psychic",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heal Jamming",
			},
			effect: {
				en: "Your opponent’s Benched Pokémon can’t be healed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
