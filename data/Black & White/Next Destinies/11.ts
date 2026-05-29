import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A Pokémon with a loyal nature, it will remain motionless until it is given an order by its Trainer.",
	},

	thirdParty: {
		cardmarket: 280236,
		tcgplayer: 85962
	}
}

export default card
