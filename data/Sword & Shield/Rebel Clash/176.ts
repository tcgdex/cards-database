import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eldegoss V",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,






	abilities: [
		{
			type: "Ability",
			name: {
				en: "Happy Match",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
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
				en: "Float Up",
			},
			effect: {
				en: "You may shuffle this Pokémon and all attached cards into your deck.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
