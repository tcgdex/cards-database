import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Chatot",
		fr: "Pijako"
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
				fr: "Accord Opportun"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may flip a coin. If heads, put a Supporter card from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lancer une pièce. Si c’est face, ajoutez une carte Supporter de votre pile de défausse à votre main."
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
				fr: "Glissement"
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
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Colorless"]
}

export default card
