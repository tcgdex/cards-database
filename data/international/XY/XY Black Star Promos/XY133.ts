import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ash Greninja EX",
		'fr-fr': "Sachanobi EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dancing Shuriken",
				'fr-fr': "Shuriken Dansant",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ninja Blade",
				'fr-fr': "Lame Ninja",
			},
			effect: {
				'en-us': "This Pokémon can't use Ninja Blade during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Lame Ninja pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
