import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		340,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Landslip",
				fr: "Affaissement de Terrain",
			},
			effect: {
				en: "Discard the top 3 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
			},
			damage: 100,

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
