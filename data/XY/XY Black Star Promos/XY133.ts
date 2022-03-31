import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Ash Greninja EX",
		fr: "Sachanobi EX",
	},
	illustrator: "5ban Graphics",
	rarity: "None",
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
				en: "Dancing Shuriken",
				fr: "Shuriken Dansant",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ninja Blade",
				fr: "Lame Ninja",
			},
			effect: {
				en: "This Pokémon can't use Ninja Blade during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Ninja pendant votre prochain tour.",
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
