import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
				de: "Rückkehr"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez jusqu’à ce que vous ayez 6 cartes en main.",
				de: "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 10,

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
		en: "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279185,
		tcgplayer: 85013
	}
}

export default card
