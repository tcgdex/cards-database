import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Granbull",
		de: "Granbull"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Snubbull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fling",
				de: "Austoben"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon. (Do the damage before switching the Pokémon.)",
				de: "Dein Gegner tauscht das verteidigende Pokémon mit 1 der Pokémon auf seiner Bank aus. (Fügt die Schadenspunkte vor dem Asutausch der Pokémon zu)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				de: "Megahieb"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275319,
		tcgplayer: 85862
	}
}

export default card
