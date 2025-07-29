import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		533,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bulk Up",
				fr: "Gonflette",
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279798
	}
}

export default card
