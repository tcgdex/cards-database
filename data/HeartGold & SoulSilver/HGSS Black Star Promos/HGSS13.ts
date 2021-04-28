import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Smoochum",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
			},
			effect: {
				en: "As long as Smoochum is Asleep, prevent all damage done to Smoochum from attacks.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Energy Antics",
			},
			effect: {
				en: "Move an Energy card attached to 1 of your opponent's Pokémon to another one of your opponent's Pokémon. Smoochum is now Asleep.",
			},

		},
	],






}

export default card
