import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Samurott",
		fr: "Clamiral"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Armor",
				fr: "Coque Armure"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wash",
				fr: "Aqua-Lavage"
			},
			effect: {
				en: "You may put 2 Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
