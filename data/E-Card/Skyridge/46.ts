import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Abra",
		de: "Abra"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychoflow",
				de: "Psychofluss"
			},
			effect: {
				en: "As long as there is a Psychic Energy card attached to Abra, its Retreat Cost is 0.",
				de: "Solange mindestens eine -Energiekarte an Abra angelegt ist, betragen seine Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				de: "Kopfnuss"
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

	thirdParty: {
		cardmarket: 275304
	}
}

export default card
