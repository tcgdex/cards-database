import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leer",
				'fr-fr': "Groz'yeux"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack Scizor during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Cizayox pendant le prochain tour de votre adversaire. (Mettre l'un des deux Pokémon sur le Banc met fin à cet effet.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Pincer",
				'fr-fr': "Pinces de Métal"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 30 dégâts plus 10 fois le nombre de faces."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its wings are not used for flying. They are flapped at high speed to adjust its body temperature.",
		'fr-fr': "Il n'utilise pas ses ailes pour voler. Elles lui servent à ajuster la température de son corps en les faisant battre rapidement."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88960
			},
		}
	]
}

export default card
