import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'de-de': "Pinsir"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [127],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crust",
				'fr-fr': "Croûte",
				'de-de': "Crust"
			},
			effect: {
				'en-us': "Any damage done to Pinsir by attacks from your opponent's Basic Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Scarabrute par des attaques du Pokémon de base de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Pinsir by attacks from your opponent's Basic Pokémon is reduced by 30 (after applying Weakness and Resistance)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Sonicboom"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "This attack's damage isn't affected by Weakness or Resistance."
			},
			damage: 30,

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
			type: "holo",
			thirdParty: {
				tcgplayer: 88135,
				cardmarket: 276087
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 88135,
				cardmarket: 276087
			}
		},
	]
}

export default card
