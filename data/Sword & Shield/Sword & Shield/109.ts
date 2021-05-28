import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Coil",
				fr: "Enroulement",
			},
			effect: {
				en: "During your next turn, this Pokémon’s attacks do 120 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud’Krâne",
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

	retreat: 2,
	regulationMark: "D"
}

export default card
