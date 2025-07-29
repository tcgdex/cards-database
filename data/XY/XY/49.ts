import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
		es: "Spoink",
		it: "Spoink",
		pt: "Spoink",
		de: "Spoink"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				es: "Salpicadura",
				it: "Splash",
				pt: "Borrifada",
				de: "Platscher"
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

	retreat: 1,

	thirdParty: {
		cardmarket: 281386
	}
}

export default card
