import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Flapple",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Applin",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Apple Drop",
			},
			effect: {
				en: "Once during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acid Spray",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
