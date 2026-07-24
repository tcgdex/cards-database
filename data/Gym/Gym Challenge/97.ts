import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Gastly"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Gaseous Form"
			},
			effect: {
				en: "Sabrina's Gastly gets +10 HP for each Psychic Energy card attached to it. This power works even if Sabrina's Gastly is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Suffocating Gas"
			},

			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88872,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88872,
				cardmarket: 274288
			}
		},
	],
}

export default card
