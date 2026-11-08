import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Carvanha",
		'fr-fr': "Carvanha de la Team Aqua",
		'pt-br': "Carvanha da Equipe Aqua",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Fin Smack",
				'fr-fr': "Coup d'Aileron",
				'pt-br': "Beijo da Barbatana",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 10 de danos vezes o número de caras.",
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "You can't keep up with its movements underwater, can you? If you get caught in this whirlpool, there'll be no escape.",
	},

	thirdParty: {
		cardmarket: 282531,
		tcgplayer: 97066
	}
}

export default card
