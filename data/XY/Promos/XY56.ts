import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nurse's Egg",
				fr: "Œuf Soin",
			},
			effect: {
				en: "Heal 100 damage from each of your Benched Pokémon. Then, discard 2 Energy attached to this Pokémon.",
				fr: "Soignez 100 dégâts à chacun de vos Pokémon de Banc. Ensuite, défaussez 2 Énergies attachées à ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
