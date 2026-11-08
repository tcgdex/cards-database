import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gallade EX",
		'fr-fr': "Gallame EX",
	},

	illustrator: "PLANETA",
	rarity: "Promo",
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
				'en-us': "Assault Sword",
				'fr-fr': "Lame d'Assaut",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has no Energy attached to it, this attack does 40 more damage.",
				'fr-fr': "Si aucune Énergie n'est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "40＋",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross Slash",
				'fr-fr': "Entaille Croisée",
			},
			effect: {
				'en-us': "This Pokémon can't use Cross Slash during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Entaille Croisée pendant votre prochain tour.",
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

	thirdParty: {
		cardmarket: 289708
	}
}

export default card
