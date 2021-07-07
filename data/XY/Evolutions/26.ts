import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Slowbro EX",
		fr: "Flagadoss-EX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slack Off",
				fr: "Paresse",
			},
			effect: {
				en: "Heal 60 damage from this Pokémon. This Pokémon can’t attack during your next turn.",
				fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Flash Splash",
				fr: "Éclaboussure Éclair",
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
