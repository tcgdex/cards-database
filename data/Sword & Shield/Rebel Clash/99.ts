import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [339],

	name: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
				es: "Aleta Afilada",
				it: "Pinnalama",
				pt: "Barbatana Cortante",
				de: "Rasierflosse"
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

	retreat: 2,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		en: "Its slimy body is hard to grasp. In one region, it is said to have been born from hardened mud."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457908,
				tcgplayer: 213187
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457908,
				tcgplayer: 213187
			}
		},
	],
}

export default card
