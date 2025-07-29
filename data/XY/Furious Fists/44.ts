import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 70,

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
				en: "Knuckle Punch",
				fr: "Coud'Phalange",
				es: "Puño con Nudillos",
				it: "Nocca-Pugno",
				pt: "Soco com Punho",
				de: "Knöchelhieb"
			},

			damage: 10,

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
		cardmarket: 281708
	}
}

export default card
