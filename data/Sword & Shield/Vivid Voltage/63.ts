import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
				fr: "Mini-Métronome"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent’s Active Pokémon’s attacks and use it as this attack.",
				fr: "Lancez une pièce. Si c’est face, choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
