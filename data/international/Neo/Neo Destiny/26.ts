import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Piloswine",
		'fr-fr': "Cochignon lumineux",
		'de-de': "Helles Keifel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'de-de': "Knock Over"
			},
			effect: {
				'en-us': "If there is a Stadium card in play, you may discard it.",
				'fr-fr': "s'il y a une carte Stade en jeu, vous pouvez vous en défausser.",
				'de-de': "If there is a Stadium card ibn play, you may discard it."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its legs are short, but its hooves are wide and flat, allowing it to easily walk over snow.",
		'fr-fr': "Il a de courtes pattes, mais ses sabots sont larges et plats, ce qui lui permet de se déplacer facilement sur la neige."
	},

	abilities: [{
		name: {
			'fr-fr': "Duvet",
			'de-de': "Fluffy Wool"
		},

		effect: {
			'fr-fr': "Pendant le tour de votre adversaire, si Cochignon est votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, le Pokémon attaquant est maintenant Endormi. Ce pouvoir cesse de fonctionner si Cochignon est déjà Endormi, Confus ou Paralysé quand votre adversaire attaque.",
			'de-de': "During your opponent's turn, if Light Piloswine is your Active Pokémon and is damaged by your oppnent's attack (even if it's Knocked Out), flip a coin. If heads, the attacking Pokémon is now Asleep. This power stops working if Light Piloswine is already Asleep, Confused, or Paralyzed when your opponent attacks."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274678,
				tcgplayer: 86747
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274678,
				tcgplayer: 86747
			}
		}
	]
}

export default card
