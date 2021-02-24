import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Samurott",
		fr: "Clamiral",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		503,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ultimate Blade",
				fr: "Ultime Lame",
			},
			effect: {
				en: "If the damage from this attack reduces your opponent's Active Pokémon's HP to 60 or less, that Pokémon is Knocked Out.",
				fr: "Si les dégâts de cette attaque réduisent les PV du Pokémon Actif de votre adversaire à 60 ou moins, ce dernier est mis K.O.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Pike",
				fr: "Javelot",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
