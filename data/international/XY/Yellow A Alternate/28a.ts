import { Card } from 'models/database/card'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		'en-us': "Jolteon-EX",
		'fr-fr': "Voltali-ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [135],
	set: Set,

	hp: 160,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{

			name: {
				'en-us': "Flash Ray",
				'fr-fr': "Rayon Flash",
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
				'fr-fr': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			},
			damage: "{L}{C}{C}",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
