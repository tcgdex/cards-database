import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		es: "Hitmonchan",
		it: "Hitmonchan",
		pt: "Hitmonchan",
		de: "Nockchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Jab",
				fr: "Taquet",
				es: "Puya",
				it: "Stoccata",
				pt: "Golpe",
				de: "Boxschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Special Punch",
				fr: "Punch spécial",
				es: "Puñetazo Especial",
				it: "Pugno Speciale",
				pt: "Soco Especial",
				de: "Spezialhieb"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 293415
	}
}

export default card
