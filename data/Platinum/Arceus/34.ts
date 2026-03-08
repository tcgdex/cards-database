import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bronzor",
		de: "Bronzel"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		436,
	],
	
	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Speed Dive",
				de: "Tempohechtsprung"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				de: "Sondersensor"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 30 more damage.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278906,
		tcgplayer: 84004
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
