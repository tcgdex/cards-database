import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eldegoss V",
		fr: "Blancoton V"
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
				fr: "Parfait Accord"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Supporter de votre pile de défausse à votre main."
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
				fr: "Flottement"
			},
			effect: {
				en: "You may shuffle this Pokémon and all attached cards into your deck.",
				fr: "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées."
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
	hp: 180,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
