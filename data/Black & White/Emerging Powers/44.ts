import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				de: "Klatscher"
			},

			damage: 20,

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
		en: "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
		de: "Beobachtet andere Pokémon und Trainer mit durchdringendem Blick, als könne es etwas erkennen, das keiner sonst sieht."
	},

	thirdParty: {
		cardmarket: 280008,
		tcgplayer: 85846
	}
}

export default card
