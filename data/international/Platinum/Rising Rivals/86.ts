import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot Niv. 6",
		'de-de': "Hornliu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [13],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Rescue String",
				'fr-fr': "Ficelle sauveuse",
				'de-de': "Rettungsfaden"
			},
			effect: {
				'en-us': "Search your discard pile for up to 5 Pokémon, show them to your opponent, and shuffle them into your deck.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 5 Pokémon, montrez-les à votre adversaire et mélangez-les à votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 5 Pokémon-Karten, zeige sie deinem Gegner und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Needling Sting",
				'fr-fr': "Piqûre piquante",
				'de-de': "Nadelstiche"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It eats its weight in leaves every day. It fends off attackers with the needle on its head."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278660,
				tcgplayer: 90545
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278660,
				tcgplayer: 90545
			}
		},
	],

}

export default card
