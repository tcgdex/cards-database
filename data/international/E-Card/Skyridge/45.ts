import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'de-de': "Woingenau"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mirror Coat",
				'de-de': "Spiegelcape"
			},
			effect: {
				'en-us': "If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon's attack during your opponent's turn, the Defending Pokémon becomes affected by the same Special Condition.",
				'de-de': "Wird Woingenau im Zug deines Gegners durch einen Angriff des aktiven Pokémon deines Gegners vergiftet oder verbrannt, wird das aktive Pokémon deines Gegners vom selben speziellen Zustand betroffen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Return Attack",
				'de-de': "Gegenangriff"
			},
			effect: {
				'en-us': "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.",
				'de-de': "Wirf 2 Münzen. Zeigt mindestens eine der beiden \"Kopf\", fügt dieser Angriff 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Woingenau zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90615,
				cardmarket: 275303
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90615,
				cardmarket: 275303
			},
		},
	],
}

export default card
