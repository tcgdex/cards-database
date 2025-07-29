import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Wobbuffet",
		de: "Woingenau"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mirror Coat",
				de: "Spiegelcape"
			},
			effect: {
				en: "If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon's attack during your opponent's turn, the Defending Pokémon becomes affected by the same Special Condition.",
				de: "Wird Woingenau im Zug deines Gegners durch einen Angriff des aktiven Pokémon deines Gegners vergiftet oder verbrannt, wird das aktive Pokémon deines Gegners vom selben speziellen Zustand betroffen."
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
				en: "Return Attack",
				de: "Gegenangriff"
			},
			effect: {
				en: "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.",
				de: "Wirf 2 Münzen. Zeigt mindestens eine der beiden \"Kopf\", fügt dieser Angriff 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Woingenau zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275303
	}
}

export default card
