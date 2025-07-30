import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Mr. Mime",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Mime Jr.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Invisible Wall",
			},
			effect: {
				en: "Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can't be used if Mr. Mime is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
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

	thirdParty: {
		cardmarket: 273950,
		tcgplayer: 42499
	}
}

export default card
