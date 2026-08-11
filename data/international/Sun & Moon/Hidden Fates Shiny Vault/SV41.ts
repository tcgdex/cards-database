import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},
	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Evolution",
				'fr-fr': "Évolution de l'Énergie",
			},
			effect: {
				'en-us': "When you attach a basic Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous attachez pendant votre tour une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte qui est l’évolution de ce Pokémon et du même type que cette carte Énergie. Mettez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Draw",
				'fr-fr': "Pioche Rapide",
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card.",
				'fr-fr': "Lancez une pièce. Si c’est face, piochez une carte.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "Current studies show it can evolve into an incredible eight different species of Pokémon.",
	},
}

export default card
