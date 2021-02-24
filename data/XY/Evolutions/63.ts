import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		35,
	],
	hp: 40,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sing",
				fr: "Berceuse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
