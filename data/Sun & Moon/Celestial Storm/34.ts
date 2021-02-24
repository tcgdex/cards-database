import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		259,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
