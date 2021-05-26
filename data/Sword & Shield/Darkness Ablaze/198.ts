import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Coalossal",
		fr: "Monthracite"
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tar Generator",
				fr: "Générateur de Poix"
			},
			effect: {
				en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
				fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon, comme il vous plaît."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flaming Avalanche",
				fr: "Avalanche Ardente"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
