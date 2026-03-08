import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Electrode",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Buzzap",
			},
			effect: {
				en: "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, choose a type of Energy. Electrode is now an Energy card of that type (instead of a Pokémon) that provides 2 energy. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Shock",
			},
			effect: {
				en: "Flip a coin. If tails, Electrode does 10 damage to itself.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273948,
		tcgplayer: 42470
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
