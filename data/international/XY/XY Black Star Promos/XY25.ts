import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Krookodile EX",
		'fr-fr': "Crocorible EX",
	},

	illustrator: "PLANETA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Bite",
				'fr-fr': "Double Morsure",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: "40+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Fang",
				'fr-fr': "Croc Lourd",
			},
			effect: {
				'en-us': "Discard a card from your hand. If you can't discard a card, this attack does nothing.",
				'fr-fr': "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
			},
			damage: 130,

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
			type: "Psychic",
			value: "−20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281308
	}
}

export default card
