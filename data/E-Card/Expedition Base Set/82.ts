import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Herbizarre",
		de: "Bisaknosp"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [237],

	hp: 60,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Graine dodo",
				de: "Schlafsamen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Spin",
				fr: "Fouet lianes",
				de: "Rankenhieb"
			},

			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86296,
				cardmarket: 274957
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
