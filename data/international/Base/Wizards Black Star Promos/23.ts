import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Lightning Burn",
				'fr-fr': "Brûlure éclair"
			},
			effect: {
				'en-us': "Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, Zapdos does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Si c'est pile, Électhor s'inflige 30 dégâts."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This legendary Pokémon is said to be present wherever there is a lightning storm.",
		'fr-fr': "Ce Pokémon légendaire est connu pour se montrer partout où il y a un orage."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90713
			},
		},
		{
			type: "normal",
			subtype: "aoki-error"
		}
	]
}

export default card
