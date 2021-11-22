import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		593,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Meddling",
				fr: "Ingérence",
			},
			effect: {
				en: "Attach 3 Energy cards from your opponent's discard pile to his or her Pokémon in any way you like.",
				fr: "Attachez 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ensnaring Spray",
				fr: "Jet Pénalisant",
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: "50+",

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
