import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Blastoise",
		'fr-fr': "Tortank"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [9],

	hp: 120,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Turn",
				'fr-fr': "Tour fracassant"
			},
			effect: {
				'en-us': "After your attack, you may switch Blastoise with 1 of your Benched Pokémon.",
				'fr-fr': "Après votre attaque, vous pouvez échanger Tortank avec 1 des Pokémon de votre Banc."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rocket Tackle",
				'fr-fr': "Lance roquette"
			},
			effect: {
				'en-us': "Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Blastoise by attacks during your opponent's next turn.",
				'fr-fr': "Tortank s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Tortank par des attaques lors du prochain tour de votre adversaire."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83891,
				cardmarket: 277449
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83891,
				cardmarket: 277449
			},
		},
	],

}

export default card
