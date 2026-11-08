import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Tropical Motion",
				'fr-fr': "Mouvement tropical",
				'de-de': "Tropical Motion"
			},
			effect: {
				'en-us': "As long as Tropius is your Active Pokémon, your opponent's Pokémon have no Resistance.",
				'fr-fr': "Tant que Tropius est votre Pokémon Actif, le Pokémon de votre adversaire n'a pas de Résistance.",
				'de-de': "As long as Tropius is your Active Pokémon, your opponent's Active Pokémon have noch Resistance."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Miracle Blow",
				'fr-fr': "Coup miraculeux",
				'de-de': "Miracle Blow"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				'de-de': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stomp"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90058,
				cardmarket: 276430
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90058,
				cardmarket: 276430
			},
		},
	],

}

export default card
