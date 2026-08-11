import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [217],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bear Hug",
				'de-de': "Umklammerung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'de-de': "Das verteidigende Pokémon kann sich im nächsten Zug deines gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'de-de': "Zerreißen"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage. If not, this attack does 40 damage.",
				'de-de': "Liegen auf dem verteidigenden Pokémon bereits Schadensmarken, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Sonnst fügt dieser Angriff 40 Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90251,
				cardmarket: 275368
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90251,
				cardmarket: 275368
			},
		},
	],
}

export default card
