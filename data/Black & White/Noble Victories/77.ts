import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Deino",
		fr: "Solochi",
		es: "Deino",
		it: "Deino",
		pt: "Deino",
		de: "Kapuno"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
		cardmarket: 280200
	}
}

export default card
