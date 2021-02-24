import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Mewtwo-EX",
		fr: "Méga-Mewtwo-EEX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 230,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Psychic",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Vanishing Strike",
				fr: "Frappe Fuyante",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage, and this attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires, et les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
