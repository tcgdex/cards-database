import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		634,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draw In",
				fr: "Aspiracartes",
			},
			effect: {
				en: "Attach 2 Darkness Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Darkness de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragon Headbutt",
				fr: "Dracoud'Boule",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280534,
		tcgplayer: 90781
	}
}

export default card
