import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Gallade-EX",
		fr: "Gallame-EX",
	},
	illustrator: "PLANETA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		475,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assault Sword",
				fr: "Lame d'Assaut",
			},
			effect: {
				en: "If your opponent's Active Pokémon has no Energy attached to it, this attack does 40 more damage.",
				fr: "Si aucune Énergie n'est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Slash",
				fr: "Entaille Croisée",
			},
			effect: {
				en: "This Pokémon can't use Cross Slash during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Entaille Croisée pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
