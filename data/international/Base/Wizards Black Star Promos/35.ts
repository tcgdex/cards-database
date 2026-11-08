import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Let's Play!",
				'fr-fr': "On joue ?"
			},
			effect: {
				'en-us': "Search your deck for a Baby Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Cherchez une carte Bébé Pokémon dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)"
			},

		},
	],

	description: {
		'en-us': "It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.",
		'fr-fr': "Bien qu'il ne soit pas encore très doué pour stocker l'électricité, il peut tout de même envoyer de petites secousses s'il est amusé ou surpris."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88014
			},
		}
	]
}

export default card
