import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Infernape 4",
		fr: "Simiabraz  Niv. X",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Intimidating Roar",
				fr: "Rugissement intimidant",
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Infernape is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec 1 des Pokémon de son Banc. Ce pouvoir ne peut pas être utilisé si Simiabraz  est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
			},
			effect: {
				en: "Discard 2 Energy attached to Infernape .",
				fr: "Défaussez 2 Énergies attachées à Simiabraz .",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
