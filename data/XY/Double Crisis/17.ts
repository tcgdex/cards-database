import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Poochyena",
		fr: "Medhyèna de la Team Magma",
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
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
				en: "Infiltrate",
				fr: "Mission Infiltration",
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
			},

		},
		{
			cost: [
				"Fighting",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 282528
	}
}

export default card
