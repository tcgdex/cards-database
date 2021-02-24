import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "M Latios-EX",
		fr: "M Latios-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 220,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sonic Ace",
				fr: "Règle des Méga-Évolutions",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Prodige Sonique",
			},
			effect: {
				fr: "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
