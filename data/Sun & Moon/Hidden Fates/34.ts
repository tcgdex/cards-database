import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mudslide",
				fr: "Coulée de Boue",
			},
			effect: {
				en: "Discard 2 Fighting Energy from this Pokémon. This attack does 80 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fighting de ce Pokémon. Cette attaque inflige 80 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 394682
	}
}

export default card
