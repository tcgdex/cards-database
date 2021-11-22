import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rescue",
				fr: "Rescousse"
			},
			effect: {
				en: "Search your discard pile for up to 2 Pokémon, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 Pokémon, montrez-les à votre adversaire et placez-les dans votre main."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: ":Ce Pokémon dresse ses piquants en cas de danger. Ils poussent moins vite que ceux de Nidorino."
	}
}

export default card
