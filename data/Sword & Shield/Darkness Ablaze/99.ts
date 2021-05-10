import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Slowbro V",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rapid-Fire Poison",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tripping Shot",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
