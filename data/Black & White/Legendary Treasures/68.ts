import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Garbodor",
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Trubbish",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Garbotoxin",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player’s hand, and in each player’s discard pile has no Abilities (except for Garbotoxin).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281219,
		tcgplayer: 85618
	}
}

export default card
