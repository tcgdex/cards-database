import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Arcanine BREAK",
		fr: "Arcanin TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Turbo Flame",
				fr: "Flamme Turbo"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc."
			},
			damage: 80,

		},
	],

	thirdParty: {
		cardmarket: 295169
	}
}

export default card
