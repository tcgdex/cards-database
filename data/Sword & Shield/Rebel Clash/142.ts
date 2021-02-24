import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Chatot",
	},
	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,






	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lucky Match",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may flip a coin. If heads, put a Supporter card from your discard pile into your hand.",
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
				en: "Glide",
			},

			damage: 30,

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
