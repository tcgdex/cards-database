import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Surfing Pikachu",
		fr: "Pikachu Surfeur",
		es: "Pikachu Surf",
		it: "Pikachu Surf",
		pt: "Pikachu Surfista",
		de: "Surfendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfe",
				de: "Surfer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "One summer, a group of Pikachu was found riding the waves at the local beach.",
	},

	thirdParty: {
		cardmarket: 293473,
		tcgplayer: 124124
	}
}

export default card
