import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		692,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d’Água",
				de: "Aquaknarre"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Through controlled expulsions of internal gas, it can expel water like a pistol shot. At close distances, it can shatter rock.",
	},

	thirdParty: {
		cardmarket: 355544,
		tcgplayer: 165676
	}
}

export default card
