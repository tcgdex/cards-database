import { Card } from '../../../interfaces'
import Set from '../Yello A Alternate'

const card: Card = {
	name: {
		fr: "Voltali-ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

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
				fr: "Météores",
			},
			effect: {
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{

			name: {
				fr: "Rayon Flash",
			},
			effect: {
				fr: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
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
