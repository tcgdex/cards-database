import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Heal",
				fr: "Soin Fleuris",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from your Active Grass Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à votre Pokémon Grass Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
