import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		723,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharp Blade Quill",
				'fr-fr': "Plum’acérée Tranchante",
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-Feuille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
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

	retreat: 1,




	description: {
		'en-us': "A bit of a dandy, it spends its free time preening its wings. Its preoccupation with any dirt on its plumage can leave it unable to battle.",
	},
}

export default card
