import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recall",
				fr: "Récupération",
			},
			effect: {
				en: "Choose 1 of this Pokémon's attacks from its previous Evolutions and use it as this attack.",
				fr: "Choisissez l'une des attaques de pré-évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion Blast",
				fr: "Explo-Combustion",
			},
			effect: {
				en: "This Pokémon can't use Combustion Blast during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
