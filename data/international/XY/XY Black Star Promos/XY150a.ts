import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Yveltal-EX",
		'fr-fr': "Yveltal-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 170,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Evil Ball",
				'fr-fr': "Balle Maléfique"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Y Cyclone",
				'fr-fr': "Cyclone Y"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,





}

export default card
