import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [175],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plead",
				'fr-fr': "Supplication",
				'de-de': "Flehen"
			},
			effect: {
				'en-us': "Ask your opponent if you may draw 2 cards. If yes, draw 2 cards. If no, this attack does 20 damage to the Defending Pokémon.",
				'fr-fr': "Demandez à votre adversaire si vous pouvez piocher 2 cartes. S’il accepte, piochez 2 cartes. S’il refuse, cette attaque inflige 20 dégâts au Pokémon Défenseur.",
				'de-de': "Frage deinen Gegner, ob du 2 Karten ziehen darfst. Wenn ja, ziehe 2 Karten. Wenn nicht, fügt dieser Angriff dem Verteidigenden Pokémon 20 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279323,
				tcgplayer: 89935
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279323,
				tcgplayer: 89935
			}
		}
	],

}

export default card
