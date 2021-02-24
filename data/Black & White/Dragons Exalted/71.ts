import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Terrakion-EX",
		fr: "Terrakium-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		639,
	],
	hp: 180,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Pump-up Smash",
				fr: "Taurocharge",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your hand to your Benched Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre main à vos Pokémon de Banc, de la manière que vous voulez.",
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

	retreat: 3,



}

export default card
