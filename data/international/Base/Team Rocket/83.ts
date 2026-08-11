import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Raichu",
		'fr-fr': "Raichu obscur",
		'de-de': "Dunkles Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Surprise Thunder",
				'fr-fr': "Tonnerre surprise",
				'de-de': "Surprise Thunder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent's Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, lancez une autre pièce. Si la seconde pièce tombe sur face, cette attaque inflige 20 dégâts à chacun des Pokémon du Banc de votre adversaire. Si la seconde pièce tombe sur pile, cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent's Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Stores up electricity in its body, then suddenly releases it to surprise and shock everyone.",
		'fr-fr': "Il emmagasine l'électricité dans son corps, puis la libère sans prévenir afin de surprendre et commotionner tout le monde."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274136,
				tcgplayer: 84647
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274136,
				tcgplayer: 84647
			}
		}
	]
}

export default card
