import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Vigorous Aura",
				'fr-fr': "Aura énergique",
				'de-de': "Vigorous Aura"
			},
			effect: {
				'en-us': "As long as Vigoroth is your Active Pokémon, attacks by each player's Active Pokémon (both if there are 2) do 10 more damage to any Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Vigoroth est votre Pokémon Actif, les attaques infligées par les Pokémon Actifs de chaque joueur (les 2 s'il y en a 2), infligent 10 dégâts supplémentaires à n'importe quel Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Vigoroth is your Active Pokémon, attacks by each player's Active Pokémon (both if there are 2) do 10 more damage to any Active Pokémon (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Scratch"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90368,
				cardmarket: 276453
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90368,
				cardmarket: 276453
			},
		},
	],

}

export default card
