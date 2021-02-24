import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sigilyph",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,






	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
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
				en: "Psychic Assault",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
			},
			damage: "30+",

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
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
