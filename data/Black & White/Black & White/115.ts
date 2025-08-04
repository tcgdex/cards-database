import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	dexId: [25],

	name: {
		fr: "Pikachu",
		en: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Énergisant",
				en: "Energize",
			},
			effect: {
				fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
				en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tonnerre",
				en: "Thunderbolt",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279853,
		tcgplayer: 88101
	}
}

export default card
