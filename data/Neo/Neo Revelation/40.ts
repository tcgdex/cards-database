import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Unown [Y]",
	},
	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "[Yield]",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Pokémon with Unown in its name. Shuffle your deck afterward. This power can be used even if Unown is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
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





}

export default card
