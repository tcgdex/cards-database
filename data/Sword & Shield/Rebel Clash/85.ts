import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hatterene",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Hattrem",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mind Hat",
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dripping Grudge",
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
			},

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
	regulationMark: "D"
}

export default card
