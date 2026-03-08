import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Seed",
				fr: "Graine poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277438,
		tcgplayer: 86298
	}
}

export default card
