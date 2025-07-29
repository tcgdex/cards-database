import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		pt: "Cherubi",
		de: "Kikugi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		420,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280746
	}
}

export default card
