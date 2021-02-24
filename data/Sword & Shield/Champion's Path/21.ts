import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Cursola V",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Psychic",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gnawing Aura",
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.",
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
				en: "Hollow Missile",
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like.",
			},
			damage: 60,

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
	retreat: 2,



}

export default card
