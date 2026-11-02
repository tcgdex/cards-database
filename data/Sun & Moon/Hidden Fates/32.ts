import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				de: "Psychoschuss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
		de: "Es beherrscht alle möglichen Attacken, daher sieht man in ihm den Vorfahren aller Pokémon."
	},

	thirdParty: {
		cardmarket: 394812,
		tcgplayer: 197676
	}
}

export default card
