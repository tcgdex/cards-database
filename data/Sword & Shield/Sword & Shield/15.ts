import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Drum Roll",
				fr: "Roulement de Tambour",
			},
			effect: {
				en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Drum Beating",
				fr: "Tambour Battant",
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Drum Beating.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tambour Battant.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
