import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Jolteon-EX",
		fr: "Voltali-EX",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
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
				en: "Swift",
				fr: "Météores",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash Ray",
				fr: "Rayon Flash",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
