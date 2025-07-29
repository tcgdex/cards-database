import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Palpitoad",
		fr: "Batracné",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
			},
			effect: {
				en: "Does 20 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280146
	}
}

export default card
