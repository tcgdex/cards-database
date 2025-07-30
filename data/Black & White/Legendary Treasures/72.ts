import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Gothitelle",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothorita",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magic Room",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Item cards from his or her hand.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Madkinesis",
			},
			effect: {
				en: "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281223,
		tcgplayer: 85854
	}
}

export default card
