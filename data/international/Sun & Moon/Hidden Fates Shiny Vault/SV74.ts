import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Stakataka-GX",
		'fr-fr': "Ama-Ama-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		805,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ultra Wall",
				'fr-fr': "Ultra-Mur",
			},
			effect: {
				'en-us': "Your Ultra Beasts take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				'fr-fr': "Vos Ultra-Chimères subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Gigaton Stomp",
				'fr-fr': "Écrasement Gigatonne",
			},

			damage: 120,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Assembly-GX",
				'fr-fr': "Empilage-GX",
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Prize card you have taken. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
