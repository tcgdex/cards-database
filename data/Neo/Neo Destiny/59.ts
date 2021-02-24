import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [Q]",
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
				en: "[Quicken]",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, prevent all effects of attacks, including damage, done to any of your Pokémon with Unown in its name during your opponent's next turn. If you have more than 1 Unown Q in play, use only 1 [Quicken] each turn. This power can be used even if Unown Q is Asleep, Confused, or Paralyzed.",
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
