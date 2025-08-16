import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Mewtwo",
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 278850
	}
}

export default card
