import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		79,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rambunctious Party",
				fr: "Méga-boum",
			},
			effect: {
				en: "Look at the top 5 cards of your deck. Choose as many Basic Pokémon as you like and put them onto your Bench. Shuffle the other cards back into your deck.",
				fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de Pokémon de base que vous le voulez et placez-les sur votre Banc. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie éclaboussante",
			},

			damage: 20,

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
