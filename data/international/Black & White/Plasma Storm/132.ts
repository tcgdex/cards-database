import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Articuno-EX",
		'fr-fr': "Artikodin-EX",
		'es-es': "Articuno-EX",
		'it-it': "Articuno-EX",
		'pt-br': "Articuno-EX",
		'de-de': "Arktos-EX"
	},
	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
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
				"Colorless",
			],
			name: {
				'en-us': "Blizzard",
				'fr-fr': "Blizzard",
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Prison",
				'fr-fr': "Prison de Givre",
			},
			effect: {
				'en-us': "If this Pokémon has any Plasma Energy attached to it, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si de l'Énergie Plasma est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
