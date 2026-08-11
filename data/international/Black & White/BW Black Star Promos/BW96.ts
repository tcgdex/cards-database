import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tornadus-EX",
		'fr-fr': "Boréas ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		641,
	],
	hp: 170,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blow Through",
				'fr-fr': "Grosse Bourrasque",
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 100,

		},
		{

			name: {
				'en-us': "Pokémon EX Rule",
				'fr-fr': "Règle pour les Pokémon ex",
			},
			effect: {
				'en-us': "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.",
				'fr-fr': "Lorsqu'un Pokémon-EX est mis K.O., l'adversaire récupère 2 cartes Récompense.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
