import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Charmeleon",
		de: "Glutexo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [5],
	
	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Charmander",
		de: "Glumanda"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				de: "Feuerschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.",
		de: "GLUTEXO leben in den Bergen. Die Flammen auf ihren Schweifspitzen leuchten in der Nacht wie Sterne."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84233,
				cardmarket: 278907
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278907,
				tcgplayer: 84233
			}
		},
	],

}

export default card
